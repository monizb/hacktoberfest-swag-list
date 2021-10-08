<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/board-eval-test.appspot.com/o/Add%20a%20heading.png?alt=media&token=9484a89d-c145-4dc8-9685-2ab0e8bd8bb6" width="1100"/>
 </p>
 <br>
 <br>

![Issues](https://img.shields.io/github/issues/monizb/hacktoberfest-swag-list?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/monizb/hacktoberfest-swag-list?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/monizb/hacktoberfest-swag-list?style=for-the-badge)
![License](https://img.shields.io/github/license/monizb/hacktoberfest-swag-list?style=for-the-badge)
[![Twitter Follow](https://img.shields.io/twitter/follow/monishb21?color=1DA1F2&logo=twitter&style=for-the-badge)](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fgithub.com%2Fmonishb21&screen_name=monishb21)
<br>

# Hacktoberfest 2021 Swag List

**Hacktoberfest** is the celebration of Open-Source. It's that time of the year
when people from all over the world come together to contribute to their
favorite Open Source projects. To show appreciation, these organizations give
out cool gadgets like T-shirts, stickers, and much more! This page aims to
consolidate the list of these gadgets in one place and make it easier to pick
your favorite. Hacktoberfest is about making meaningful contributions. There is
no space for **SPAM** or **HATRED**. Violating these rules will result in harsh
repercussions. Create PRs that will add value to these organizations and take
home these sweet rewards.

You can read more about Hacktoberfest
[here](https://hacktoberfest.digitalocean.com/). If you are part of any of the
organizations listed below and don't want your swag to be listed, contact me by
raising an issue on the official repository and it will be taken down
immediately. <br> <br>

## Raising Issues

Please use the appropriate template while raising an issue. There are mainly
four types of templates available: New Swag Opportunity, Takedown Request, Bugs,
and Feature Request. Provide all the information asked in the given template for
faster resolutions. <br> <br>

## Adding a swag to the list

Found a swag opportunity we don't have yet? You can easily add it using the
following steps:

1. Go to the swag list JSON file:
   https://github.com/monizb/hacktoberfest-swag-list/blob/main/src/list.json

2. Look for the first letter of the organization which is giving this swag: For
   example, let's take **TEST COMPANY**. We should open the corresponding array
   and add an object to it as follows:

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
                "link": "https://mattermost.com/blog/hacktoberfest-2021/" //Link to the place where more info on this is available
        }
        ....
    ]
```

3. Once you are done, make a Pull Request to the main branch. Netlify will
   create a preview of your PR. Afterward, we will merge it accordingly. Never
   delete or change any existing swag listings from the JSON file. <br>

## Disclaimer

This repository was made just for fun. It does not have any direct relation with
DigitalOcean or Hacktoberfest. All the information present here is already
publicly available information. This repository is maintained by Monish
Basaniwal.

![follow btn](https://img.shields.io/github/followers/monizb?style=social)
