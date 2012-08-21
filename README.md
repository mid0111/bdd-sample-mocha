bdd-sample-mocha
================

This is a sample project of mocha.  
See [mocha project page] (http://visionmedia.github.com/mocha/).  


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
        
        
          Calculator
            足し算
              ✓ 1 + 1 は 2になること 
              1) 1 + (-20)は -19 になること
            引き算
              ✓ 20 - 2 は 18になること 
        
          Array
            インスタンス生成
              ✓ サイズが０であること 
              ✓ 中身が空であること 
        
        
          ✖ 1 of 5 tests failed:
        
          1) Calculator 足し算 1 + (-20)は -19 になること:
             AssertionError: expected -18 to equal -19
              at Object.Assertion.equal (/home/mid/src/bdd-sample-mocha/node_modules/should/lib/should.js:304:10)
              at Context.<anonymous> (/home/mid/src/bdd-sample-mocha/test/sample.test.js:12:21)
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
        
        
          -----------------------------------------------------------------------------------------------------------------------------
          ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅✈⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅
          -----------------------------------------------------------------------------------------------------------------------------
        
          ✖ 1 of 5 tests failed:
        
          1) Calculator 足し算 1 + (-20)は -19 になること:
             AssertionError: expected -18 to equal -19
              at Object.Assertion.equal (/home/mid/src/bdd-sample-mocha/node_modules/should/lib/should.js:304:10)
              at Context.<anonymous> (/home/mid/src/bdd-sample-mocha/test/sample.test.js:12:21)
              at Test.Runnable.run (/usr/local/lib/node_modules/mocha/lib/runnable.js:184:32)
              at Runner.runTest (/usr/local/lib/node_modules/mocha/lib/runner.js:300:10)
              at Runner.runTests.next (/usr/local/lib/node_modules/mocha/lib/runner.js:346:12)
              at next (/usr/local/lib/node_modules/mocha/lib/runner.js:228:14)
              at Runner.hooks (/usr/local/lib/node_modules/mocha/lib/runner.js:237:7)
              at next (/usr/local/lib/node_modules/mocha/lib/runner.js:185:23)
              at Runner.hook (/usr/local/lib/node_modules/mocha/lib/runner.js:205:5)
              at process.startup.processNextTick.process._tickCallback (node.js:244:9)

