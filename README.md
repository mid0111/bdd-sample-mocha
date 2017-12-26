bdd-sample-mocha
================

This is a sample project of mocha.  
See [mocha project page] (http://mochajs.org/).  


Install mocha
-------------
Install with npm:

    $ npm install -g mocha


Describe test code
------------------

Create opts file:

    --require should
    --reporter spec
    --ui bdd

Create test file: [sample] (https://github.com/mid0111/bdd-sample-mocha/tree/master/test)

+ [should.js] (https://github.com/visionmedia/should.js)
+ async test timeout support
+ Interfaces

Run mocha
---------

+ spec
        
        $ mocha
        
        
          UserModel
            インスタンス生成
              ✓ 指定した属性でインスタンスが作成されること 
              ✓ nameのみを指定し、指定した属性でインスタンスが生成されること 
              ✓ nameとprojectを指定し、指定した属性でインスタンが生成されること 
              ✓ nameと複数projectを指定し、指定した属性でインスタンが生成されること 
        
        
          ✔ 4 tests complete (11ms)
        

        $ mocha
        
        
          UserModel
            インスタンス生成
              ✓ 指定した属性てインスタンスか作成されること 
              ✓ nameのみを指定し、指定した属性てインスタンスか生成されること 
              1) nameとprojectを指定し、指定した属性てインスタンか生成されること
              ✓ nameと複数projectを指定し、指定した属性でインスタンが生成されること 
        
        
          ✖ 1 of 4 tests failed:
        
          1) UserModel インスタンス生成 nameとprojectを指定し、指定した属性でインスタンが生成されること:
             AssertionError: expected [ { name: 'hoge',
          url: 'http://piyo.com',
          _id: 5034b42a796085e50b000003,
          updated: Wed Aug 22 2012 19:27:54 GMT+0900 (JST),
          posted: Wed Aug 22 2012 19:27:54 GMT+0900 (JST) } ] to have a length of 0 but got 1
              at Object.Assertion.length (/home/mid/src/bdd-sample-mocha/node_modules/should/lib/should.js:422:10)
              at Context.<anonymous> (/home/mid/src/bdd-sample-mocha/test/models.test.js:35:32)
              at Test.Runnable.run (/usr/local/lib/node_modules/mocha/lib/runnable.js:184:32)
              at Runner.runTest (/usr/local/lib/node_modules/mocha/lib/runner.js:300:10)
              at Runner.runTests.next (/usr/local/lib/node_modules/mocha/lib/runner.js:346:12)
              at next (/usr/local/lib/node_modules/mocha/lib/runner.js:228:14)
              at Runner.hooks (/usr/local/lib/node_modules/mocha/lib/runner.js:237:7)
              at next (/usr/local/lib/node_modules/mocha/lib/runner.js:185:23)
              at Runner.hook (/usr/local/lib/node_modules/mocha/lib/runner.js:205:5)
              at process.startup.processNextTick.process._tickCallback (node.js:244:9)


+ landing

        $ mocha --reporter landing
        
        
          -----------------------------------------------------------
          ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅✈
          -----------------------------------------------------------
        
          ✔ 4 tests complete (10ms)


