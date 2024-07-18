use anchor_lang::prelude::*;
use anchor_lang::solana_program::program::invoke_signed;

declare_id!("4Uuqg7nMNZR7kE9oAV2k3MopzNRYsyRvyqhRDVZcYNdZ");

#[program]
pub mod solarning_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, bump: u8) -> Result<()> {
        msg!("Initializing user account...");
        let user_data = &mut ctx.accounts.user_data;
        user_data.owner = *ctx.accounts.user.key;
        user_data.bump = bump; // Store bump in PDA
        user_data.progress = String::new(); // Initialize with empty progress
        msg!("User account initialized with owner: {}", user_data.owner);
        Ok(())
    }

    pub fn update_progress(ctx: Context<UpdateProgress>, new_progress: String) -> Result<()> {
        msg!("Updating user progress...");
        let user_data = &mut ctx.accounts.user_data;
        user_data.progress = new_progress;
        msg!("User progress updated to: {}", user_data.progress);
        Ok(())
    }

    pub fn reset_progress(ctx: Context<ResetProgress>) -> Result<()> {
        msg!("Resetting user progress...");
        let user_data = &mut ctx.accounts.user_data;
        user_data.progress = String::new(); // Reset progress
        msg!("User progress reset");
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(bump: u8)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 1 + 4 + 200, seeds = [b"user_data", user.key().as_ref()], bump)]
    pub user_data: Account<'info, UserData>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateProgress<'info> {
    #[account(mut, seeds = [b"user_data", user.key().as_ref()], bump)]
    pub user_data: Account<'info, UserData>,
    #[account(signer)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct ResetProgress<'info> {
    #[account(mut, seeds = [b"user_data", user.key().as_ref()], bump)]
    pub user_data: Account<'info, UserData>,
    #[account(signer)]
    pub user: Signer<'info>,
}

#[account]
pub struct UserData {
    pub owner: Pubkey,
    pub bump: u8,
    pub progress: String,
}
