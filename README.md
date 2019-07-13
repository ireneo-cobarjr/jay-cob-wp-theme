# jay-cob-wp-theme
[Jay-cob.com](https://Jay-cob.com) Official WordPress Theme

### Instructions for Noobs
To build from source, You need to have the following installed on your Computer.

- Node.js
- WordPress
- A running local web server like [Valet](https://laravel.com/docs/5.8/valet) or [XAMPP](https://www.apachefriends.org/index.html)
- Git
* * *
If you have all of this already installed:
1. Open a terminal and navigate to the theme folder of the locally installed WordPress. 
 `cd localWordPress/wp-content/themes`
2. Clone this repo by entering this commands on the terminal:
`git clone https://github.com/ireneo-cobarjr/jay-cob-wp-theme.git`
`cd jay-cob-wp-theme`
3. Install dependencies by entering this command on the terminal:
`npm install`
4. Open gulpfile.js located on the root directory of jay-cob-wp-theme folder and go to Section B. Change the variable `localsite` to match the local web address of your locally installed WordPress.
`localsite = 'http://yourWordPress';`
5. Run the task runner on the terminal:
`gulp`


gulp is using browser-sync. So any changes on files at `src/` will reload the browser.
* * *

### Libraries Used

- [Bulma](https://bulma.io)
- [jump.js](http://callmecavs.com/jump.js/)
- [sal.js](https://mciastek.github.io/sal/)
- [scene.js](https://daybrush.com/scenejs/)
