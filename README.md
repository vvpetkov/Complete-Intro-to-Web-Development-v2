# Complete Intro to Web Development v2
## 12 hours Course by Brian Holt host: Frontend Masters
# New repetition for my very old basic web development skills

Complete Intro to Web Development, v2 : More than an introduction, in this course you’ll go from building your first website to having the foundation for becoming a professional web developer with modern skills! By coding along in this course, you'll get experience writing HTML, the primary language for putting content on a page. CSS, a language designed to make your websites look tidy and aesthetically pleasing. And learn how to program, starting with a wonderful language to learn with, JavaScript. After this whirlwind tour of web development, you'll know how to write code with HTML, CSS &amp; JavaScript. You'll learn to use your terminal to save your code with Git and as a small bonus primer, you'll get a taste of how to use JavaScript via Node.js to serve your website from a server!

[Code and Course Notes](https://btholt.github.io/intro-to-web-dev-v2/)

| Content                | Sessions | Videos | Complete | Project                                                      | My Project                                                   | Finished   |
| ---------------------- | -------- | ------ | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| HTML                   | 1:30 h   | 10/10  | 100 %    |                                                              |                                                              | 21.03.2020 |
| CSS                    | 3:00 h   | 16/16  | 100 %    | [site](https://btholt.github.io/intro-to-web-dev-v2/news.html#) | [site](https://vvpetkov.github.io/Complete-Intro-to-Web-Development-v2/Project-HTML-&-CSS/index.html#) | 22.03.2020 |
| JavaScript             | 4:00 h   | 06/19  | 30 %     | stop on                                                      | Functions                                                    | 28.03.2020 |
| Using Ajax and Node.js | 0:30 h   |        | 0 %      |                                                              |                                                              |            |
| Learning Git           | 0:40 h   |        | 0 %      |                                                              |                                                              |            |
| Using Node.js          | 0:20 h   |        | 0 %      |                                                              |                                                              |            |

# Notes / Abstractions / Key things / Ideas 

​    

### HTML 

### CSS 

* Only style in classes!

* If you want to style for everting in the document to look the same :  then use a tag style (all my links look the same)

* Avoid cascading ,more simple ,less problems 

* Specificity (more specific win / no space between )  [StarWars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

* Classes is more specific than tags 

* Do Not use ID to style, overwrite Classes (bad idea)

* Do Not use !important overwrite ID's (bad idea)

* Do not use **float** we have now **flex**

* The Box Model / display / flex

  * grid !?! [Is it safe to use CSS grids for my layout?](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
  
  * Height,Width,Padding,Border and Margin

  * Height = 200 / Is everting will be 200? / well  it depends :)
   * For all site all box sizing will be predictable after this (wild card selector)
     ```css
      * {
        box-sizing: border-box;
      }
     ```
   * Use 'wild card selector' ONLY for this problem  for every site 
   * Wild card selector is a **bad idea**
  
* Float and Flexbox

  * structural selector (>) Do not use (if changing HTML , CSS stop working)

  * Float

    * winXP: Floats
    * Limitation of Float (box 3 will never push up higher than the box 2 before him)

  * Flex

    * display: flex ;
      * squish it proportionally instead of wrapping it (cool)
    * flex-direction
      * flex-direction: row-reverse; (backwards! Easy as pie to do it with flex)
      * We can even make it a column!   flex-direction: column ;
    * You play with the parent container not to the boxes inside 
    * align-items: flex-end 

  * Centering something inside of something 

    ```css
    dislpay:flex;
    aling-items:center;
    justify-content:center;
    ```

    

    



