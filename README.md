# eslint-plugin-no-zangyo

本日はノー残業デーです！！！

![image](https://cloud.githubusercontent.com/assets/1403842/24955457/7cf85910-1fbe-11e7-89f3-0230928497da.png)

## Installation

```
$ npm i -D eslint @fand/eslint-plugin-only-ascii
```

## Usage

```json
{
    "plugins": [
        "@fand/no-zangyo"
    ],
    "rules": {
        "no-zangyo/no-zangyo": 2
    }
}
```

You can specify begin/end time of your company.

```json
{
    "plugins": [
        "@fand/no-zangyo"
    ],
    "rules": {
        "no-zangyo/no-zangyo": [2, {
            "beginWorking": "10:00",
            "endWorking": "19:00"
        }]
    }
}
```

## Supported Rules
* no-zangyo/no-zangyo: はよ帰れ

# Author
[amagitakayosi](https://twitter.com/amagitakayosi)
