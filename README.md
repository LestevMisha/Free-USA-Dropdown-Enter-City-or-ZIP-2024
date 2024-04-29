# Free-USA-Dropdown-Enter-City-or-ZIP-2024

### Data Source
This [individual](https://github.com/niiknow) was able to find/create the most complete [database](https://github.com/niiknow/zipcode-us) of cities, zip-codes, counties, coordinates etc., of the United States of America in 2024. In this project niiknow's database was used or whoever is the original author.

### Intro

In turn we provided you with the best, in my opinion, strategy how to implement `zip & city search input` in the web as optimized as it can be possibly made. We created python script that would sort database provided by [niiknow](https://github.com/niiknow) into 2 folders.

1. The first folder, `cities-in-alphabetical-order`, contains ZIP code information sorted alphabetically, organizing every city/locality in the U.S. by its initial letter.

2. The second folder is organized with 10,000 zip codes in each .js file, covering zip codes in the range from 0 to 99,999 (00000 - 99999).

### How does it work?

Javascript fetches 1 of the respective files you enter i. e. if you type `Boston` the first letter it gets is `b` therefore we observe file `./cities-in-alphabetical-order/b.js` that has every zip information on letter `b` in the U.S. Instead of fetching over 1.5 millions lines of code that would take a critical time for the user and the website itself we simply split it into pieces and serve. Thus I would call this strategy dynamic or "serve-as-you-go" (in other words serve as user input/type) 😃. The same way it works with zip codes, if you enter 84331 it will fetch `./ZIPs-in-numeric-order/us80_89.js` and serve it to user. For those who are devs simply check `main.js`.

### Demo
Here's the [demo](https://lestevmisha.github.io/Free-USA-Dropdown-Enter-City-or-ZIP-2024/) of `Enter ZIP or City` dropdown/input.

## IMPORTANT
This database includes zip codes that may not exist, providing flexibility for users. If you can't find your zip code in this database, please feel free to start a discussion, and we will add it in. Let's work together as a community to maintain the most up-to-date zip code database for the U.S.

## Installation

Use git clone to install and use this project.

```bash
git clone https://github.com/LestevMisha/Free-USA-Dropdown-Enter-City-or-ZIP-2024.git
```

## Contribute
We didn't find such services for free, google place apis charge about 2.5$ per 1000 requests, and it was not an option for the recent project, so we created this solution. If you want to support us - ETH `0x17d629FC3C919547172aca20B77cdd60EC7129F6`, 
Thank you 🤍🙏

## License

[MIT](https://choosealicense.com/licenses/mit/)