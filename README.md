<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/board-eval-test.appspot.com/o/Add%20a%20heading.png?alt=media&token=9484a89d-c145-4dc8-9685-2ab0e8bd8bb6" width="1100"/>
 </p>
 <br>
 <br>

![Issues](https://img.shields.io/github/issues/monizb/hacktoberfest-swag-list?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/monizb/hacktoberfest-swag-list?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/monizb/hacktoberfest-swag-list?style=for-the-badge)
![License](https://img.shields.io/github/license/monizb/hacktoberfest-swag-list?style=for-the-badge)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fmonizb%2Fhacktoberfest-swag-list%2F&style=for-the-badge&logo=twitter)

<br>

# Hacktoberfest 2021 Swag List

**Hacktoberfest** is the celebration of Open-Source, its that time of the year
when people from all over the world come together to contribute to their
favorite Open Source projects. To make the deal sweeter some organizations give
out cool swags like tshirts, stickers and much more! This page aims to
consolidate all the swag opportunities in one place and make it easier for you
to choose from. Always remember, Hacktoberfest is about making **"meaningful
contributions"** any kind of **SPAM/HATRED** is a big **NO** and isn't
tolerated. Create PRs that add value and take home the sweet swags!

You can read more about Hacktoberfest
[here](https://hacktoberfest.digitalocean.com/). If you are a part of an
organization listed below and dont wan't your swag to be listed, please contact
me by raising an issue on the official repository and it will be taken down
immediately. <br> <br>

## Raising Issues

Please use the appropriate template while raising an issue. There are mainly 4
types of templates available: New Swag Opportunity, Takedown Request, Bugs and
Feature Request. Provide all the information asked in the given template for
faster resolutions <br> <br>

## Adding a swag to the list

Found a swag opportunity we don't have yet? You can easily add it using the
following steps:

1. Go to the swag list JSON file:
   https://github.com/monizb/hacktoberfest-swag-list/blob/main/src/list.json

2. Look for the first letter of the organization which is giving this swag: For
   example let's take **TEST COMPANY** as an example, we will open the
   corresponding array and add an object to it as follows:

```
    ....
    "T": [
        {
                "organization": "TEST COMPANY",
                "org_url": "https://linktothecompanywebsite.com/",
                "tags": [ //Add a single tag for each item the company is giving away
                    "Stickers",
                    "Keyboard"
                ],
                "description": "Description about how to earn the swag and all the criteria",
                "no_of_prs": 1, //Minimum number of PRS to earn that swag
                "link": "https://mattermost.com/blog/hacktoberfest-2021/" //Link to tge place where more info on this is available
        }
        ....
    ]
```

3. Once done you can now raise a Pull Request to the main branch and Netlify
   will create a preview of your PR and then will be merged accordingly.Never
   delete or change any existing swag listings from the JSON file. <br>

## Disclaimer

This repository has been made Just-For-Fun, it does not have any direct relation
with DigitalOcean or Hacktoberfest. All information present is already publicly
available information.This repository is maintained by Monish Basaniwal

![follow btn](https://img.shields.io/github/followers/monizb?style=social)
