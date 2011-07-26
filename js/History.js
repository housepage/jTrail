
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <script type="text/javascript">var NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
        <title>balupton/history.js - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://gs1.wac.edgecastcdn.net/80460E/assets/3240aae1825624487a3beca0e08581a614660976/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://gs1.wac.edgecastcdn.net/80460E/assets'
      }
      var github_user = null
      
    </script>
    <script src="https://gs1.wac.edgecastcdn.net/80460E/assets/javascripts/jquery/jquery-1.6.1.min.js" type="text/javascript"></script>
    <script src="https://gs1.wac.edgecastcdn.net/80460E/assets/9a8d4d0be567a85129ca26f93f40eb76dcc8bfbb/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "balupton/history.js"
      })
    </script>

    
  <link rel='canonical' href='/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea'>

  <link href="https://github.com/balupton/history.js/commits/master.atom" rel="alternate" title="Recent Commits to history.js:master" type="application/atom+xml" />

        <meta name="description" content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality." />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "balupton/history.js";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "bb4807927285db42ba25d89426efced5f69c49ea";
      GitHub.currentPath = '';
      GitHub.masterBranch = "master";

      
        GitHub.currentTreeSHA = "bb4807927285db42ba25d89426efced5f69c49ea";
      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out   env-production">
    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
          <a class="logo boring" href="https://github.com">
            
            <img alt="github" class="default" height="45" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/header/logov6.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" height="45" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/header/logov6-hover.png" />
            <!--<![endif]-->
          </a>
       
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      
      <li class="blog"><a href="/blog">Blog</a></li>
      
      <li class="login"><a href="/login?return_to=%2Fbalupton%2FHistory.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/balupton">balupton</a> / <strong><a href="/balupton/history.js">history.js</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="/balupton/history.js/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/balupton/history.js/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '23e9c738158bebff967d1b8a4aca5d606ac59d3f'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/balupton/history.js/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '23e9c738158bebff967d1b8a4aca5d606ac59d3f'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/balupton/history.js/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '23e9c738158bebff967d1b8a4aca5d606ac59d3f'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/balupton/history.js/watchers" title="Watchers" class="tooltipped downwards">818</a></li>
          <li class="forks"><a href="/balupton/history.js/network" title="Forks" class="tooltipped downwards">30</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="/balupton/history.js" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="/balupton/history.js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/balupton/history.js/network" highlight="repo_network">Network</a></li>
    <li><a href="/balupton/History.js/pulls" highlight="repo_pulls">Pull Requests (4)</a></li>

    

    
      
      <li><a href="/balupton/History.js/issues" highlight="issues">Issues (29)</a></li>
    

                <li><a href="/balupton/History.js/wiki" highlight="repo_wiki">Wiki (3)</a></li>
        
    <li><a href="/balupton/history.js/graphs" highlight="repo_graphs">Graphs</a></li>

    

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="/balupton/history.js/branches" class="dropdown">Switch Branches (11)</a>
      <ul>
        
          
          
            <li><a href="/balupton/History.js/tree/dev" data-name="dev">dev</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/gh-pages" data-name="gh-pages">gh-pages</a></li>
          
        
          
            <li><strong>master &#x2713;</strong></li>
            
          
          
            <li><a href="/balupton/History.js/tree/v1.0" data-name="v1.0">v1.0</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.1" data-name="v1.1">v1.1</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.2" data-name="v1.2">v1.2</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.3" data-name="v1.3">v1.3</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.4" data-name="v1.4">v1.4</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.5" data-name="v1.5">v1.5</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.6" data-name="v1.6">v1.6</a></li>
          
        
          
          
            <li><a href="/balupton/History.js/tree/v1.7" data-name="v1.7">v1.7</a></li>
          
        
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/balupton/History.js/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      
        <a href="/balupton/history.js/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>
      

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality.
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/balupton/history.js/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="23e9c738158bebff967d1b8a4aca5d606ac59d3f" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality.">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://balupton.github.com/history.js/demo/" rel="nofollow">http://balupton.github.com/history.js/demo/</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/balupton/history.js/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="23e9c738158bebff967d1b8a4aca5d606ac59d3f" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://balupton.github.com/history.js/demo/">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
      <div class="url-box">
  

  <ul class="clone-urls">
    
      
      <li class="http_clone_url"><a href="https://github.com/balupton/history.js.git" data-permissions="Read-Only">HTTP</a></li>
      <li class="public_clone_url"><a href="git://github.com/balupton/history.js.git" data-permissions="Read-Only">Git Read-Only</a></li>
    
    
  </ul>
  <input type="text" spellcheck="false" class="url-field" />
        <span style="display:none" id="clippy_1462" class="url-box-clippy"></span>
      <span id="clippy_tooltip_clippy_1462" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_1462&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://gs1.wac.edgecastcdn.net/80460E/assets/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_1462&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

  <p class="url-description"><strong>Read+Write</strong> access</p>
</div>

    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/balupton/history.js">history.js</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/balupton/History.js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      










<script type="text/javascript">
  GitHub.downloadRepo = '/balupton/history.js/archives/master'
  GitHub.revType = "master"

  GitHub.repoName = "history.js"
  GitHub.controllerName = "tree"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "tree#show"

  
    GitHub.loggedIn = false
  

  
</script>






  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/balupton/history.js/commit/bb4807927285db42ba25d89426efced5f69c49ea">added qunit normally</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/9400cb5aeb155ccec614652542fd274d?s=140&d=https://gs1.wac.edgecastcdn.net/80460E/assets%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/balupton">balupton</a> <span>(author)</span></div>
        <div class="date">
          <time class="js-relative-date" datetime="2011-07-06T15:24:43-07:00" title="2011-07-06 15:24:43">July 06, 2011</time>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/balupton/history.js/commit/bb4807927285db42ba25d89426efced5f69c49ea" class="js-commit-link" data-key="c">bb4807927285db42ba25</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea" class="js-tree-link" data-key="t">cbe621fae24a00db7d84</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/balupton/history.js/tree/6a8a6db4b7bdb5fefd78a340470d375331f6fb1f" class="js-parent-link" data-key="p">6a8a6db4b7bdb5fefd78</a>
      

    </div>
  </div>

    </div>
  </div>



<div id="slider">
  
    <div class="breadcrumb" data-path="/">
      <b><a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea">history.js</a></b> / 
    </div>

    
      


  <div class="frames">
    <div class="frame frame-center" data-path="/" data-canonical-url="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea">
      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="header">
          <th></th>
          <th>name</th>
          <th>age</th>
          <th>
            <div class="history">
              <a href="/balupton/history.js/commits/master/">history</a>
            </div>
            message
          </th>
        </tr>

        

        
        
                    <tr class="alt">
            <td class="icon"> <img alt="directory" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/dir.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea/demo" class="js-slide-to" id="68e46a6e3c5e141484b1d020fb761fb3135df484">demo/</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-31T22:35:15-07:00" title="2011-03-31 22:35:15">March 31, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/833fd3a8d5c93036c22d5fbec9fb777c0ca09366" class="message">Fixed a recursion issue with FF3.6. Removed Firebu...</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="">
            <td class="icon"> <img alt="directory" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/dir.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea/scripts" class="js-slide-to" id="2cf2c15f19acf30c875857227532398c2a042256">scripts/</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-06-29T08:54:33-07:00" title="2011-06-29 08:54:33">June 29, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/a32e91aa1fe5909a29abb690a37f6c129e98068e" class="message">compiled added pull requests</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="alt">
            <td class="icon"> <img alt="directory" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/dir.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea/tests.src" class="js-slide-to" id="f821fb8864c9d6f3df47667929e6238a9b77bcf2">tests.src/</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-31T22:35:15-07:00" title="2011-03-31 22:35:15">March 31, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/833fd3a8d5c93036c22d5fbec9fb777c0ca09366" class="message">Fixed a recursion issue with FF3.6. Removed Firebu...</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="">
            <td class="icon"> <img alt="directory" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/dir.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea/tests" class="js-slide-to" id="4e0c49f3e2f0d7bb470c0831eb21928955399213">tests/</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-31T22:44:59-07:00" title="2011-03-31 22:44:59">March 31, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/10f4cff31e80e8c14621abd3ea12da5a2a0b225b" class="message">Rebuilt. Documented. Date added to v1.7 release.</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="alt">
            <td class="icon"> <img alt="directory" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/dir.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/tree/bb4807927285db42ba25d89426efced5f69c49ea/vendor" class="js-slide-to" id="3d364354b534f37a69432707a4d5dcc3822f00e1">vendor/</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-07-06T15:24:43-07:00" title="2011-07-06 15:24:43">July 06, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/bb4807927285db42ba25d89426efced5f69c49ea" class="message">added qunit normally</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="">
            <td class="icon"> <img alt="file" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/blob/bb4807927285db42ba25d89426efced5f69c49ea/.gitignore" class="js-slide-to" id="b7f13992f4fc68d846dd9806f564788f3d2b6d15">.gitignore</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-01-20T23:22:52-08:00" title="2011-01-20 23:22:52">January 20, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/f2651bdc6ed30635ac4b307543b5ded75572d8ec" class="message">Added compressed version, added basic cli.</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="alt">
            <td class="icon"> <img alt="file" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/blob/bb4807927285db42ba25d89426efced5f69c49ea/README.md" class="js-slide-to" id="5eeee32861c6e59dd921898227ca3c162108aa3e">README.md</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-05-16T13:54:54-07:00" title="2011-05-16 13:54:54">May 16, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/57e61cf763448121ac5e9c42b7fea2ea09fb73d6" class="message">Docfix: reference correct installation step</a> [<a href="/wesgarrison">wesgarrison</a>] </td>
          </tr>
        
                    <tr class="">
            <td class="icon"> <img alt="file" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/blob/bb4807927285db42ba25d89426efced5f69c49ea/cli" class="js-slide-to" id="59363c874aff964c58acec134ea2b8ff2eb3ae88">cli</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-30T14:53:18-07:00" title="2011-03-30 14:53:18">March 30, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/703124e6c2220ad99a212250d4f49b6a5a6e771d" class="message">v1.7 beta. Need to test properly.</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
                    <tr class="alt">
            <td class="icon"> <img alt="file" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/blob/bb4807927285db42ba25d89426efced5f69c49ea/license.txt" class="js-slide-to" id="647bfd26d49af47498654f0faba22db644165cff">license.txt</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-30T09:54:15-07:00" title="2011-03-30 09:54:15">March 30, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/bfa0b4a82d0b9e01f1fbbdabb6a97cceaa5dada5" class="message">Add a license file so people who use this are BSD ...</a> [<a href="/markjaquith">markjaquith</a>] </td>
          </tr>
        
                    <tr class="">
            <td class="icon"> <img alt="file" height="16" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/icons/txt.png" width="16" /> </td>
            <td class="content"> <a href="/balupton/history.js/blob/bb4807927285db42ba25d89426efced5f69c49ea/package.json" class="js-slide-to" id="18ba6c5592ecb1592423f3275391a4444426edb3">package.json</a></td>
            
            <td class="age"> <time class="js-relative-date" datetime="2011-03-27T06:30:51-07:00" title="2011-03-27 06:30:51">March 27, 2011</time> </td>
            <td class="message"> <a href="/balupton/history.js/commit/298c3f085468f16a50da7226555c6dec21530042" class="message">Now uses buildr.</a> [<a href="/balupton">balupton</a>] </td>
          </tr>
        
      </table>

      
      <div id="readme" class="announce instapaper_body md" data-path="/"><span class="name">README.md</span><div class="wikistyle"><h1>Welcome to History.js (v1.7.0 - April 01 2011)</h1>

<p>This project is the successor of <a href="http://balupton.com/projects/jquery-history">jQuery History</a>, it aims to:</p>

<ul>
<li>Follow the <a href="https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history">HTML5 History API</a> as much as possible</li>
<li>Provide a cross-compatible experience for all HTML5 Browsers (they all implement the HTML5 History API a little bit differently causing different behaviours and sometimes bugs - History.js fixes this ensuring the experience is as expected / the same / great throughout the HTML5 browsers)</li>
<li>Provide a backwards-compatible experience for all HTML4 Browsers using a hash-fallback (including continued support for the HTML5 History API's <code>data</code>, <code>title</code>, <code>pushState</code> and <code>replaceState</code>) with the option to <a href="https://github.com/balupton/History.js/wiki/Intelligent-State-Handling">remove HTML4 support if it is not right for your application</a>
</li>
<li>Provide a forwards-compatible experience for HTML4 States to HTML5 States (so if a hash-fallbacked url is accessed by a HTML5 browser it is naturally transformed into its non-hashed url equivalent)</li>
<li>Provide support for as many javascript frameworks as possible via adapters; especially <a href="http://jquery.com/">jQuery</a>, <a href="http://mootools.net/">MooTools</a>, <a href="http://www.prototypejs.org/">Prototype</a> and <a href="http://zeptojs.com/">Zepto</a>
</li>
</ul><p>Licensed under the <a href="http://creativecommons.org/licenses/BSD/">New BSD License</a>
Copyright 2011 <a href="http://balupton.com">Benjamin Arthur Lupton</a></p>

<h2>Usage</h2>

<h3>Working with History.js:</h3>

<pre><code>(function(window,undefined){

    // Prepare
    var History = window.History; // Note: We are using a capital H instead of a lower h
    if ( !History.enabled ) {
         // History.js is disabled for this browser.
         // This is because we can optionally choose to support HTML4 browsers or not.
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        History.log(State.data, State.title, State.url);
    });

    // Change our States
    History.pushState({state:1}, "State 1", "?state=1"); // logs {state:1}, "State 1", "?state=1"
    History.pushState({state:2}, "State 2", "?state=2"); // logs {state:2}, "State 2", "?state=2"
    History.replaceState({state:3}, "State 3", "?state=3"); // logs {state:3}, "State 3", "?state=3"
    History.pushState(null, null, "?state=4"); // logs {}, '', "?state=4"
    History.back(); // logs {state:3}, "State 3", "?state=3"
    History.back(); // logs {state:1}, "State 1", "?state=1"
    History.back(); // logs {}, "Home Page", "?"
    History.go(2); // logs {state:3}, "State 3", "?state=3"

})(window);
</code></pre>

<p>To ajaxify your entire website with the HTML5 History API, History.js and jQuery <a href="https://gist.github.com/854622">this snippet of code</a> is all you need. It's that easy.</p>

<h3>How would the above operations look in a HTML5 Browser?</h3>

<ol>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/?state=1">www.mysite.com/?state=1</a></li>
<li><a href="http://www.mysite.com/?state=2">www.mysite.com/?state=2</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
<li><a href="http://www.mysite.com/?state=4">www.mysite.com/?state=4</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
<li><a href="http://www.mysite.com/?state=1">www.mysite.com/?state=1</a></li>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
</ol><blockquote>
<p>Note: These urls also work in HTML4 browsers and Search Engines. So no need for the hashbang (<code>#!</code>) fragment-identifier that google <a href="https://github.com/balupton/History.js/wiki/Intelligent-State-Handling">"recommends"</a>.</p>
</blockquote>
<h3>How would they look in a HTML4 Browser?</h3>

<ol>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/#?state=1&amp;_suid=1">www.mysite.com/#?state=1&amp;_suid=1</a></li>
<li><a href="http://www.mysite.com/#?state=2&amp;_suid=2">www.mysite.com/#?state=2&amp;_suid=2</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
<li><a href="http://www.mysite.com/#?state=4">www.mysite.com/#?state=4</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
<li><a href="http://www.mysite.com/#?state=1&amp;_suid=1">www.mysite.com/#?state=1&amp;_suid=1</a></li>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
</ol><blockquote>
<p>Note 1: These urls also work in HTML5 browsers - we use <code>replaceState</code> to transform these HTML4 states into their HTML5 equivalents so the user won't even notice :-)</p>

<p>Note 2: These urls will be automatically url-encoded in IE6 to prevent certain browser-specific bugs.</p>

<p>Note 3: Support for HTML4 browsers (this hash fallback) is optional <a href="https://github.com/balupton/History.js/wiki/Intelligent-State-Handling">- why supporting HTML4 browsers could be either good or bad based on my app's use cases</a></p>
</blockquote>
<h3>What's the deal with the SUIDs used in the HTML4 States?</h3>

<ul>
<li>SUIDs (State Unique Identifiers) are used when we utilise a <code>title</code> and/or <code>data</code> in our state. Adding a SUID allows us to associate particular states with data and titles while keeping the urls as simple as possible (don't worry it's all tested, working and a lot smarter than I'm making it out to be).</li>
<li>If you aren't utilising <code>title</code> or <code>data</code> then we don't even include a SUID (as there is no need for it) - as seen by State 4 above :-)</li>
<li>We also shrink the urls to make sure that the smallest url will be used. For instance we will adjust <code>http://www.mysite.com/#http://www.mysite.com/projects/History.js</code> to become <code>http://www.mysite.com/#/projects/History.js</code> automatically. (again tested, working, and smarter).</li>
<li>It works with domains, subdomains, subdirectories, whatever - doesn't matter where you put it. It's smart.</li>
<li>Safari 5 will also have a SUID appended to the URL, it is entirely transparent but just a visible side-effect. It is required to fix a bug with Safari 5.</li>
</ul><h3>Is there a working demo?</h3>

<ul>
<li>Sure is, give it a download and navigate to the demo directory in your browser :-)</li>
<li>If you are after something a bit more adventurous than a end-user demo, open up the tests directory in your browser and editor - it'll rock your world and show all the vast use cases that History.js supports.</li>
</ul><h2>Download &amp; Installation</h2>

<ol>
<li><p>Download History.js and upload it to your webserver. Download links: <a href="https://github.com/balupton/History.js/tarball/master">tar.gz</a> or <a href="https://github.com/balupton/History.js/zipball/master">zip</a></p></li>
<li>
<p>Include <a href="http://www.json.org/js.html">JSON2</a> for HTML4 Browsers Only <em>(replace <a href="http://www.yourwebsite.com">www.yourwebsite.com</a>)</em></p>

<pre><code>&lt;script&gt;if ( typeof window.JSON === 'undefined' ) { document.write('&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/json2.js"&gt;&lt;\/script&gt;'); }&lt;/script&gt;
</code></pre>
</li>
<li>
<p>Include <a href="http://amplifyjs.com/">Amplify.js Store</a> for Data Persistance and Synchronisation Support (optional but recommended)</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/amplify.store.js"&gt;&lt;/script&gt;
</code></pre>
</li>
<li>
<p>Include the Adapter for your Framework:</p>

<ul>
<li>
<p><a href="http://jquery.com/">jQuery</a> v1.3+</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.adapter.jquery.js"&gt;&lt;/script&gt;
</code></pre>
</li>
<li>
<p><a href="http://mootools.net/">Mootools</a> v1.3+</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.adapter.mootools.js"&gt;&lt;/script&gt;
</code></pre>
</li>
<li>
<p><a href="http://www.prototypejs.org/">Prototype</a> v1.7+ (does not support versions of IE prior to 9 due to a bug in the prototype library)</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.adapter.prototype.js"&gt;&lt;/script&gt;
</code></pre>
</li>
<li>
<p><a href="http://zeptojs.com/">Zepto</a> v0.5+</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.adapter.zepto.js"&gt;&lt;/script&gt;
</code></pre>
</li>
<li><p><em>Would you like to support another framework? No problem! It's very easy to create adapters, and I'll be happy to include them or help out if you <a href="https://github.com/balupton/history.js/issues">let me know</a> :-)</em></p></li>
</ul>
</li>
<li>
<p>Include History.js</p>

<pre><code>&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.js"&gt;&lt;/script&gt;
&lt;script src="http://www.yourwebsite.com/history.js/scripts/compressed/history.html4.js"&gt;&lt;/script&gt;
</code></pre>
</li>
</ol><blockquote>
<p>Note: If you want to only support HTML5 Browsers and not HTML4 Browsers (so no hash fallback support) then just remove the <code>history.html4.js</code> file include in step #5 and the JSON2 (<code>json2.js</code>) file include in step #2 <a href="https://github.com/balupton/History.js/wiki/Intelligent-State-Handling">- why supporting HTML4 browsers could be either good or bad based on my app's use cases</a></p>
</blockquote>
<h2>Subscribe to Updates</h2>

<ul>
<li>For Email Updates:

<ul>
<li>You can subscribe via the subscription form included in the demo page</li>
</ul>
</li>
<li>For Commit RSS/Atom Updates:

<ul>
<li>You can subscribe via the <a href="https://github.com/balupton/History.js/commits/master.atom">GitHub Commit Atom Feed</a>
</li>
</ul>
</li>
<li>For GitHub News Feed Updates:

<ul>
<li>You can click the "watch" button up the top right of History.js's <a href="https://github.com/balupton/History.js">GitHub Project Page</a>
</li>
</ul>
</li>
</ul><h2>Getting Support</h2>

<p>History.js is an actively developed, supported and maintained project. You can grab support via its <a href="https://github.com/balupton/History.js/issues">GitHub Issue Tracker</a>. Alternatively you can reach <a href="http://balupton.com">Benjamin Lupton</a> (the core developer) via <a href="http://twitter.com/balupton">twitter</a>, skype (balupton) or email (<a href="mailto:contact@balupton.com">contact@balupton.com</a>).</p>

<h2>Giving Support</h2>

<p>If you'd love to give some support back and make a difference; here are a few great ways you can give back!</p>

<ul>
<li>Give it your honest rating on its <a href="http://plugins.jquery.com/project/history-js">jQuery Plugin's Page</a> and its <a href="https://www.ohloh.net/p/history-js">Ohloh Page</a>
</li>
<li>If you have any feedback or suggestions let me know via its <a href="https://github.com/balupton/History.js/issues">Issue Tracker</a> - so that I can ensure you get the best experience!</li>
<li>Spread the word via tweets, blogs, tumblr, whatever - the more people talking about it the better!</li>
<li>Donate via the donation form at the bottom right of <a href="http://balupton.com">balupton.com</a> - every cent truly does help!</li>
<li>Make it easier for me to let you know about future releases and updates by subscribing via the signup form inside the demo page</li>
<li>Watch it via clicking the "watch" button up the top of its <a href="https://github.com/balupton/History.js">Project Page</a>
</li>
</ul><p>Thanks! every bit of help really does make a difference. Again thank you.</p>

<h2>Browsers: Tested and Working In</h2>

<h3>HTML5 Browsers</h3>

<ul>
<li>Chrome 8,9,10</li>
<li>Firefox 4</li>
<li>Safari 5</li>
<li>Safari iOS 4.3</li>
</ul><h3>HTML4 Browsers</h3>

<ul>
<li>IE 6,7,8,9</li>
<li>Firefox 3</li>
<li>Opera 10,11</li>
<li>Safari 4</li>
<li>Safari iOS prior to version 4.3</li>
</ul><h2>Exposed API</h2>

<h3>Functions</h3>

<ul>
<li>
<code>History.pushState(data,title,url)</code> <br> Pushes a new state to the browser; <code>data</code> can be null or an object, <code>title</code> can be null or a string, <code>url</code> must be a string</li>
<li>
<code>History.replaceState(data,title,url)</code> <br> Replaces the existing state with a new state to the browser; <code>data</code> can be null or an object, <code>title</code> can be null or a string, <code>url</code> must be a string</li>
<li>
<code>History.getState()</code> <br> Gets the current state of the browser, returns an object with <code>data</code>, <code>title</code> and <code>url</code>
</li>
<li>
<code>History.getHash()</code> <br> Gets the current hash of the browser</li>
<li>
<code>History.Adapter.bind(element,event,callback)</code> <br> A framework independent event binder, you may either use this or your framework's native event binder.</li>
<li>
<code>History.Adapter.trigger(element,event)</code> <br> A framework independent event trigger, you may either use this or your framework's native event trigger.</li>
<li>
<code>History.Adapter.onDomLoad(callback)</code> <br> A framework independent onDomLoad binder, you may either use this or your framework's native onDomLoad binder.</li>
<li>
<code>History.back()</code> <br> Go back once through the history (same as hitting the browser's back button)</li>
<li>
<code>History.forward()</code> <br> Go forward once through the history (same as hitting the browser's forward button)</li>
<li>
<code>History.go(X)</code> <br> If X is negative go back through history X times, if X is positive go forwards through history X times</li>
<li>
<code>History.log(...)</code> <br> Logs messages to the console, the log element, and fallbacks to alert if neither of those two exist</li>
<li>
<code>History.debug(...)</code> <br> Same as <code>History.log</code> but only runs if <code>History.debug.enable === true</code>
</li>
</ul><h3>Events</h3>

<ul>
<li>
<code>window.onstatechange</code> <br> Fired when the state of the page changes (does not include hash changes)</li>
<li>
<code>window.onanchorchange</code> <br> Fired when the anchor of the page changes (does not include state hashes)</li>
</ul><h2>Notes on Compatibility</h2>

<ul>
<li>History.js <strong>solves</strong> the following browser bugs:

<ul>
<li>HTML5 Browsers

<ul>
<li>Chrome 8 sometimes does not contain the correct state data when traversing back to the initial state</li>
<li>Safari 5, Safari iOS 4 and Firefox 3 and 4 do not fire the <code>onhashchange</code> event when the page is loaded with a hash</li>
<li>Safari 5 and Safari iOS 4 do not fire the <code>onpopstate</code> event when the hash has changed unlike the other browsers</li>
<li>Safari 5 and Safari iOS 4 fail to return to the correct state once a hash is replaced by a <code>replaceState</code> call / <a href="https://bugs.webkit.org/show_bug.cgi?id=56249">bug report</a>
</li>
<li>Safari 5 and Safari iOS 4 sometimes fail to apply the state change under busy conditions / <a href="https://bugs.webkit.org/show_bug.cgi?id=42940">bug report</a>
</li>
<li>Google Chrome 8,9,10 and Firefox 4 prior to the RC will always fire <code>onpopstate</code> once the page has loaded / <a href="http://hacks.mozilla.org/2011/03/history-api-changes-in-firefox-4/">change recommendation</a>
</li>
<li>Safari iOS 4.0, 4.1, 4.2 have a working HTML5 History API - although the actual back buttons of the browsers do not work, therefore we treat them as HTML4 browsers</li>
<li>None of the HTML5 browsers actually utilise the <code>title</code> argument to the <code>pushState</code> and <code>replaceState</code> calls</li>
</ul>
</li>
<li>HTML4 Browsers

<ul>
<li>Old browsers like MSIE 6,7 and Firefox 2 do not have a <code>onhashchange</code> event</li>
<li>MSIE 6 and 7 sometimes do not apply a hash even it was told to (requiring a second call to the apply function)</li>
<li>Non-Opera HTML4 browsers sometimes do not apply the hash when the hash is not <code>urlencoded</code>
</li>
</ul>
</li>
<li>All Browsers

<ul>
<li>State data and titles do not persist once the site is left and then returned (includes page refreshes)</li>
<li>State titles are never applied to the <code>document.title</code>
</li>
</ul>
</li>
</ul>
</li>
<li>ReplaceState functionality is emulated in HTML4 browsers by discarding the replaced state, so when the discarded state is accessed it is skipped using the appropriate <code>History.back()</code> / <code>History.forward()</code> call</li>
<li>Data persistance and synchronisation works like so: Every second or so, the SUIDs and URLs of the states will synchronise between the store and the local session. When a new session opens a familiar state (via the SUID or the URL) and it is not found locally then it will attempt to load the last known stored state with that information.</li>
<li>URLs will be unescaped to the maximum, so for instance the URL <code>?key=a%20b%252c</code> will become <code>?key=a b c</code>. This is to ensure consistency between browser url encodings.</li>
<li>Changing the hash of the page causes <code>onpopstate</code> to fire (this is expected/standard functionality). To ensure correct compatibility between HTML5 and HTML4 browsers the following events have been created:

<ul>
<li>
<code>window.onstatechange</code>: this is the same as the <code>onpopstate</code> event except it does not fire for traditional anchors</li>
<li>
<code>window.onanchorchange</code>: this is the same as the <code>onhashchange</code> event except it does not fire for states</li>
</ul>
</li>
<li>Known Issues

<ul>
<li>Opera 11 fails to create history entries when under stressful loads (events fire perfectly, just the history events fail) - there is nothing we can do about this</li>
<li>Mercury iOS fails to apply url changes (hashes and HTML5 History API states) - there is nothing we can do about this</li>
</ul>
</li>
</ul><h2>Changelog</h2>

<ul>
<li>
<p>v1.7.0 - April 01 2011</p>

<ul>
<li>Added <code>History.enabled</code> property (refer to usage section). This reflects whether or not History.js is enabled for our particular browser. For instance, if we have not included support for a HTML4 browser and we are accessing through a HTML4 browser then <code>History.enabled</code> will be <code>false</code>.</li>
<li>Added (optional but recommended) Data Persistance and Synchronisation Support thanks to <a href="http://appendto.com/">AppendTo's</a> <a href="http://amplifyjs.com/">Amplify.js</a> (refer to installation and compatibility sections for details)</li>
<li>Made HTML5 SUIDs more transparent - <a href="https://github.com/balupton/History.js/issues#issue/34">Reported</a> by <a href="https://github.com/azago">azago</a> and <a href="http://markjaquith.com/">Mark Jaquith</a>
</li>
<li>Fixed Session Storage Issue - Reported by a whole bunch of different people; <a href="https://github.com/balupton/History.js/issues#issue/36">one</a>, <a href="https://github.com/balupton/History.js/issues#issue/37">two</a>, <a href="http://getsatisfaction.com/balupton/topics/history_js_1_6_losing_state_after_manual_page_reload">three</a>
</li>
<li>Fixed URL Encoding Issue - <a href="https://github.com/balupton/history.js/issues/#issue/33">Reported</a> by <a href="http://robmadole.com/">Rob Madole</a>
</li>
<li>Disabled support for IE6,7,8 when using the Prototype Adapter (there is nothing we can do about this, it is due to a bug in the prototype library) - <a href="https://github.com/balupton/history.js/issues#issue/39">Reported</a> by <a href="http://sindre.at/">Sindre Wimberger</a>
</li>
<li>URLs in the State Hashes for HTML4 Browsers are now even shorter - <a href="https://github.com/balupton/history.js/issues#issue/28">Discussion</a>
</li>
<li>Fixed a issue with the MooTools Adapter and JSON with IE7 and IE8</li>
</ul>
</li>
<li>
<p>v1.6.0 - March 22 2011</p>

<ul>
<li>Added Zepto adapter thanks to <a href="http://twitter.com/#!/matthewgarrett">Matt Garrett</a>
</li>
<li>The readme now references the supported versions of the libraries we use</li>
<li>Updated vendors to the most recent versions. jQuery 1.5.1 and Mootools 1.3.1</li>
<li>Reverted versions of Safari iOS prior to version 4.3 to be HTML4 browsers, Safari iOS 4.3 is a HTML5 browser</li>
<li>Refined code in History.js and its adapters</li>
<li>Fixed issue with extra state being inserted on Safari 5 requiring an extra click on the back button to go home - <a href="https://github.com/balupton/history.js/issues#issue/17">Reported</a> by <a href="http://robmadole.com/">Rob Madole</a>
</li>
<li>Fixed issue with Safari 5 and Safari iOS 4 sometimes failing to apply the state change under busy conditions - Solution conceived with <a href="http://twitter.com/matthewgarrett">Matt Garrett</a>
</li>
<li>Fixed issue with HTML4 browsers requiring a query-string in the urls of states - <a href="https://github.com/balupton/history.js/issues#issue/26">Reported</a> by <a href="https://github.com/azago">azago</a>
</li>
<li>Fixed issue with HTML4 browsers requiring title in the states in order to use state data - <a href="https://github.com/balupton/history.js/issues#issue/25">Reported</a> by <a href="http://system-werks.com/">Jonathan McLaughlin</a>
</li>
<li>Fixed issue with HTML4 browsers failing is a state is pushed/replaced twice in a row - <a href="https://github.com/balupton/history.js/issues#issue/17">Reported</a> by <a href="http://byjoeybaker.com/">Joey Baker</a>
</li>
<li>
<strong>B/C BREAK:</strong> The <code>statechange</code> event now only fires if the state has changed; it no longer fires on page initialisation. This is following the <a href="http://hacks.mozilla.org/2011/03/history-api-changes-in-firefox-4/">Firefox 4 History API Changes</a> which we agree with - this breaks standard, but makes more sense.</li>
</ul>
</li>
<li>
<p>v1.5.0 - February 12 2011</p>

<ul>
<li>Moved to UglifyJS instead of Google Closure</li>
<li>Split HTML4 functionality from HTML5 functionality</li>
<li>Installation details have changed (the filenames are different)</li>
</ul>
</li>
<li>
<p>v1.4.1 - February 10 2011</p>

<ul>
<li>Added HTML History API Support for Safari 5 and Safari iOS 4.2.1</li>
<li>Cleaned code a bit (mostly with unit tests)</li>
</ul>
</li>
<li>
<p>v1.4.0 - February 10 2011</p>

<ul>
<li>Unit Testing now uses <a href="http://docs.jquery.com/Qunit">QUnit</a>
</li>
<li>Corrected Safari 5 Support</li>
<li>Now uses queues instead of timeouts

<ul>
<li>This means the API works exactly as expected, no more need to wrap calls in timeouts</li>
</ul>
</li>
<li>Included a Subscribe Form in the Demo for Version Updates via Email</li>
<li>Small updates to Documentation</li>
</ul>
</li>
<li>
<p>v1.3.1 - February 04 2011</p>

<ul>
<li>Improved Documentation</li>
</ul>
</li>
<li>
<p>v1.3.0 - January 31 2011</p>

<ul>
<li>Support for cleaner HTML4 States</li>
</ul>
</li>
<li>
<p>v1.2.1 - January 30 2011</p>

<ul>
<li>Fixed History.log always being called - <a href="https://github.com/balupton/History.js/issues/#issue/2">reported by dlee</a>
</li>
<li>Re-Added <code>History.go(index)</code> support</li>
</ul>
</li>
<li>
<p>v1.2.0 - January 25 2011</p>

<ul>
<li>Support for HTML4 States in HTML5 Browsers (added test)</li>
<li>Updates of Documentation</li>
</ul>
</li>
<li>
<p>v1.1.0 - January 24 2011</p>

<ul>
<li>Developed a series of automated test cases</li>
<li>Fixed issue with traditional anchors</li>
<li>Fixed issue with differing replaceState functionality in HTML4 Browsers</li>
<li>Fixed issue with Google Chrome artefacts being carried over to the initial state</li>
<li>Provided <code>onstatechange</code> and <code>onanchorchange</code> events</li>
</ul>
</li>
<li>
<p>v1.0.0 - January 22 2011</p>

<ul>
<li>Supported <code>History.pushState</code> and <code>History.replaceState</code> degradation</li>
<li>Supported jQuery, MooTools and Prototype Frameworks</li>
</ul>
</li>
</ul><h2>Todo for Upcoming Releases</h2>

<ul>
<li>Allow for url to be optional in <code>pushState</code> and <code>replaceState</code> calls</li>
<li>Add an Ajax extension to succeed the <a href="http://balupton.com/projects/jquery-ajaxy">jQuery Ajaxy</a> project</li>
<li>Add a compilation test to ensure <code>.debug = false</code> and no <code>History.log</code> or <code>console.xxx</code> calls exist.</li>
</ul><p>It's likely these features and/or others have been included in the latest <a href="https://github.com/balupton/History.js/tree/dev">dev branch</a>. If you are wanting to fork and help out, then be sure to work on the dev branch and not master.</p></div></div>
    </div>
  </div>
  <br style="clear:both;">


<br style="clear:both;">

<div class="frame frame-loading" style="display:none;">
  <img src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>


    

  
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        
          <div class="sponsor">
            <a href="http://www.rackspace.com" class="logo">
              <img alt="Dedicated Server" height="36" src="https://gs1.wac.edgecastcdn.net/80460E/assets/images/modules/footer/rackspace_logo.png?v2" width="38" />
            </a>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
        

        <ul class="links">
          
            <li class="blog"><a href="https://github.com/blog">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
            <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
            <li><a href="https://github.com/training">Training</a></li>
            <li><a href="http://jobs.github.com">Job Board</a></li>
            <li><a href="http://shop.github.com">Shop</a></li>
            <li><a href="http://developer.github.com">API</a></li>
            <li><a href="http://status.github.com">Status</a></li>
          
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.07862s from fe5.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    <script>window._auth_token = "23e9c738158bebff967d1b8a4aca5d606ac59d3f"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    
    
    <script type="text/javascript">(function(){var d=document;var e=d.createElement("script");e.async=true;e.src="https://d1ros97qkrwjf5.cloudfront.net/14/eum/rum.js	";e.type="text/javascript";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();NREUMQ.push(["nrf2","beacon-1.newrelic.com","2f94e4d8c2",64799,"dw1bEBZcX1RWRhoSFFEHGhcMXEQ=",0.0,71,new Date().getTime()])</script>
  </body>
</html>

