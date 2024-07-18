/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solarning_anchor.json`.
 */
export type SolarningAnchor = {
    "address": "4Uuqg7nMNZR7kE9oAV2k3MopzNRYsyRvyqhRDVZcYNdZ",
    "metadata": {
      "name": "solarningAnchor",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "initialize",
        "discriminator": [
          175,
          175,
          109,
          31,
          13,
          152,
          155,
          237
        ],
        "accounts": [
          {
            "name": "userData",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    117,
                    115,
                    101,
                    114,
                    95,
                    100,
                    97,
                    116,
                    97
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      },
      {
        "name": "resetProgress",
        "discriminator": [
          111,
          72,
          109,
          145,
          24,
          99,
          194,
          140
        ],
        "accounts": [
          {
            "name": "userData",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    117,
                    115,
                    101,
                    114,
                    95,
                    100,
                    97,
                    116,
                    97
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "user",
            "signer": true
          }
        ],
        "args": []
      },
      {
        "name": "updateProgress",
        "discriminator": [
          135,
          47,
          78,
          113,
          27,
          158,
          21,
          111
        ],
        "accounts": [
          {
            "name": "userData",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    117,
                    115,
                    101,
                    114,
                    95,
                    100,
                    97,
                    116,
                    97
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "user",
            "signer": true
          }
        ],
        "args": [
          {
            "name": "newProgress",
            "type": "string"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "userData",
        "discriminator": [
          139,
          248,
          167,
          203,
          253,
          220,
          210,
          221
        ]
      }
    ],
    "types": [
      {
        "name": "userData",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "owner",
              "type": "pubkey"
            },
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "progress",
              "type": "string"
            }
          ]
        }
      }
    ]
  };
  