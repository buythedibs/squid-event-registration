import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x9e9c495f0ad5e947ab12ccd0dcb4f6d14f2281f25bd492e571aca30547ce8904",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.72.1",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "3.2.0",
      "rust_toolchain": "stable-x86_64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "az_event_registration",
    "version": "0.1.0",
    "authors": [
      "DIBS"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "deadline",
            "type": {
              "displayName": [
                "Timestamp"
              ],
              "type": 3
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 4
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 0
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 17
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 19
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 20
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 18
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 3
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "Destroy"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "referrer",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 12
            }
          }
        ],
        "docs": [],
        "label": "Register"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "referrer",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 12
            }
          }
        ],
        "docs": [],
        "label": "Update"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 6
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "config",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 7
        },
        "selector": "0x70714744"
      },
      {
        "args": [
          {
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "show",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0xf1b0ace3"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "destroy",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 15
        },
        "selector": "0xc7e248e4"
      },
      {
        "args": [
          {
            "label": "referrer",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "register",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0x229b553f"
      },
      {
        "args": [
          {
            "label": "referrer",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "update",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0x5f234f5d"
      },
      {
        "args": [
          {
            "label": "deadline",
            "type": {
              "displayName": [
                "Timestamp"
              ],
              "type": 3
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "update_config",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 15
        },
        "selector": "0xed3c9313"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "admin"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 3
                }
              },
              "name": "deadline"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xd890db84",
                              "ty": 0
                            }
                          },
                          "name": "address"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xd890db84",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xd890db84",
                                          "ty": 0
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "referrer"
                        }
                      ],
                      "name": "Registration"
                    }
                  },
                  "root_key": "0xd890db84"
                }
              },
              "name": "registrations"
            }
          ],
          "name": "AzEventRegistration"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 2
          }
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          },
          {
            "name": "E",
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 8
          },
          {
            "name": "E",
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "admin",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "deadline",
                "type": 3,
                "typeName": "Timestamp"
              }
            ]
          }
        },
        "path": [
          "az_event_registration",
          "az_event_registration",
          "Config"
        ]
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 10
          },
          {
            "name": "E",
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 11
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "address",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "referrer",
                "type": 12,
                "typeName": "Option<AccountId>"
              }
            ]
          }
        },
        "path": [
          "az_event_registration",
          "az_event_registration",
          "Registration"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 6,
                    "typeName": "LangError"
                  }
                ],
                "index": 0,
                "name": "ContractCall"
              },
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "String"
                  }
                ],
                "index": 1,
                "name": "InkEnvError"
              },
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "NotFound"
              },
              {
                "index": 3,
                "name": "Unauthorised"
              },
              {
                "fields": [
                  {
                    "type": 14,
                    "typeName": "String"
                  }
                ],
                "index": 4,
                "name": "UnprocessableEntity"
              }
            ]
          }
        },
        "path": [
          "az_event_registration",
          "errors",
          "AzEventRegistrationError"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 16
          },
          {
            "name": "E",
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          },
          {
            "name": "E",
            "type": 13
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    config(): Promise<Result<Config, LangError>> {
        return this.stateCall('0x70714744', [])
    }

    show(address: AccountId): Promise<Result<Result<Registration, AzEventRegistrationError>, LangError>> {
        return this.stateCall('0xf1b0ace3', [address])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Destroy | Event_Register | Event_Update

export interface Event_Destroy {
    __kind: 'Destroy'
    address: AccountId
}

export interface Event_Register {
    __kind: 'Register'
    address: AccountId
    referrer: (AccountId | undefined)
}

export interface Event_Update {
    __kind: 'Update'
    address: AccountId
    referrer: (AccountId | undefined)
}

export type Message = Message_config | Message_show | Message_destroy | Message_register | Message_update | Message_update_config

export interface Message_config {
    __kind: 'config'
}

export interface Message_show {
    __kind: 'show'
    address: AccountId
}

export interface Message_destroy {
    __kind: 'destroy'
}

export interface Message_register {
    __kind: 'register'
    referrer: (AccountId | undefined)
}

export interface Message_update {
    __kind: 'update'
    referrer: (AccountId | undefined)
}

export interface Message_update_config {
    __kind: 'update_config'
    deadline: Timestamp
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    deadline: Timestamp
}

export interface Config {
    admin: AccountId
    deadline: Timestamp
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Uint8Array

export interface Registration {
    address: AccountId
    referrer: (AccountId | undefined)
}

export type AzEventRegistrationError = AzEventRegistrationError_ContractCall | AzEventRegistrationError_InkEnvError | AzEventRegistrationError_NotFound | AzEventRegistrationError_Unauthorised | AzEventRegistrationError_UnprocessableEntity

export interface AzEventRegistrationError_ContractCall {
    __kind: 'ContractCall'
    value: LangError
}

export interface AzEventRegistrationError_InkEnvError {
    __kind: 'InkEnvError'
    value: string
}

export interface AzEventRegistrationError_NotFound {
    __kind: 'NotFound'
    value: string
}

export interface AzEventRegistrationError_Unauthorised {
    __kind: 'Unauthorised'
}

export interface AzEventRegistrationError_UnprocessableEntity {
    __kind: 'UnprocessableEntity'
    value: string
}

export type Timestamp = bigint

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
