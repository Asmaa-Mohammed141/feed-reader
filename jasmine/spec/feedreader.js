/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URLS are defined' , function() {
            allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        });
     });


     it('name and not empty' , function() {
            allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
        });
     });
});



     describe('The menu' , function() {
        it('hidden the menu' , function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
     });


      it('the meny changes visibility', function() {
        //trigger event on menu
        $('a.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('a.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);

      });


        // hidden when the meny icone by clicking again
//          it('hidden by clicking again', function() {
//            //trigger event on menu
//            $('a.menu-icon-link').trigger('click');
//            expect($('body').hasClass('menu-hidden')).toBe(true);
//          });
      });

    
      describe('Initial Entries' , function () {
          beforeEach(function(done) {
              loadFeed(0,done);
          });
  
          
           it ('Initial element is there' , function() {
              expect($('.feed .entry').length).toBeGreaterThan(0);
           });
      });
  
      
      describe ('New Feed Selection' , function () {
          var Test;
          beforeEach(function(done) {
                  loadFeed(0,function () {
                  Test = $('.feed').html();
                  loadFeed(1,done);
              });
          });
  
          
           it('hass been loaded' , function() {
              expect($('.feed').html()).not.toEqual(Test);
           });
       });
  

}());
