/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/selectall.js']) {
  _$jscoverage['plugins/selectall.js'] = [];
  _$jscoverage['plugins/selectall.js'][12] = 0;
  _$jscoverage['plugins/selectall.js'][13] = 0;
  _$jscoverage['plugins/selectall.js'][14] = 0;
  _$jscoverage['plugins/selectall.js'][17] = 0;
  _$jscoverage['plugins/selectall.js'][19] = 0;
  _$jscoverage['plugins/selectall.js'][20] = 0;
  _$jscoverage['plugins/selectall.js'][22] = 0;
  _$jscoverage['plugins/selectall.js'][23] = 0;
  _$jscoverage['plugins/selectall.js'][25] = 0;
  _$jscoverage['plugins/selectall.js'][27] = 0;
  _$jscoverage['plugins/selectall.js'][31] = 0;
  _$jscoverage['plugins/selectall.js'][32] = 0;
  _$jscoverage['plugins/selectall.js'][33] = 0;
  _$jscoverage['plugins/selectall.js'][34] = 0;
  _$jscoverage['plugins/selectall.js'][35] = 0;
  _$jscoverage['plugins/selectall.js'][36] = 0;
  _$jscoverage['plugins/selectall.js'][37] = 0;
  _$jscoverage['plugins/selectall.js'][40] = 0;
  _$jscoverage['plugins/selectall.js'][42] = 0;
  _$jscoverage['plugins/selectall.js'][43] = 0;
  _$jscoverage['plugins/selectall.js'][45] = 0;
  _$jscoverage['plugins/selectall.js'][46] = 0;
  _$jscoverage['plugins/selectall.js'][47] = 0;
  _$jscoverage['plugins/selectall.js'][48] = 0;
  _$jscoverage['plugins/selectall.js'][50] = 0;
  _$jscoverage['plugins/selectall.js'][51] = 0;
  _$jscoverage['plugins/selectall.js'][52] = 0;
  _$jscoverage['plugins/selectall.js'][54] = 0;
  _$jscoverage['plugins/selectall.js'][55] = 0;
  _$jscoverage['plugins/selectall.js'][56] = 0;
  _$jscoverage['plugins/selectall.js'][57] = 0;
  _$jscoverage['plugins/selectall.js'][58] = 0;
  _$jscoverage['plugins/selectall.js'][59] = 0;
  _$jscoverage['plugins/selectall.js'][60] = 0;
  _$jscoverage['plugins/selectall.js'][61] = 0;
  _$jscoverage['plugins/selectall.js'][62] = 0;
  _$jscoverage['plugins/selectall.js'][63] = 0;
  _$jscoverage['plugins/selectall.js'][64] = 0;
  _$jscoverage['plugins/selectall.js'][65] = 0;
  _$jscoverage['plugins/selectall.js'][72] = 0;
}
_$jscoverage['plugins/selectall.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///commands &#20840;&#36873;</span>","<span class=\"c\">///commandsName  SelectAll</span>","<span class=\"c\">///commandsTitle  &#20840;&#36873;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> * &#36873;&#20013;&#25152;&#26377;</span>","<span class=\"c\"> * @function</span>","<span class=\"c\"> * @name baidu.editor.execCommand</span>","<span class=\"c\"> * @param   {String}   cmdName    selectall&#36873;&#20013;&#32534;&#36753;&#22120;&#37324;&#30340;&#25152;&#26377;&#20869;&#23481;</span>","<span class=\"c\"> * @author zhanyi</span>","<span class=\"c\">*/</span>","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'selectall'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'selectall'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"c\">//&#21435;&#25481;&#20102;&#21407;&#29983;&#30340;selectAll,&#22240;&#20026;&#20250;&#20986;&#29616;&#25253;&#38169;&#21644;&#24403;&#20869;&#23481;&#20026;&#31354;&#26102;&#65292;&#19981;&#33021;&#20986;&#29616;&#38381;&#21512;&#29366;&#24577;&#30340;&#20809;&#26631;</span>","            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>body <span class=\"k\">=</span> me<span class=\"k\">.</span>body<span class=\"k\">,</span>","                range <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">();</span>","            range<span class=\"k\">.</span>selectNodeContents<span class=\"k\">(</span>body<span class=\"k\">);</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>domUtils<span class=\"k\">.</span>isEmptyBlock<span class=\"k\">(</span>body<span class=\"k\">))</span><span class=\"k\">{</span>","                <span class=\"c\">//opera&#19981;&#33021;&#33258;&#21160;&#21512;&#24182;&#21040;&#20803;&#32032;&#30340;&#37324;&#36793;&#65292;&#35201;&#25163;&#21160;&#22788;&#29702;&#19968;&#19979;</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>browser<span class=\"k\">.</span>opera <span class=\"k\">&amp;&amp;</span> body<span class=\"k\">.</span>firstChild <span class=\"k\">&amp;&amp;</span> body<span class=\"k\">.</span>firstChild<span class=\"k\">.</span>nodeType <span class=\"k\">==</span> <span class=\"s\">1</span><span class=\"k\">)</span><span class=\"k\">{</span>","                    range<span class=\"k\">.</span>setStartAtFirst<span class=\"k\">(</span>body<span class=\"k\">.</span>firstChild<span class=\"k\">);</span>","                <span class=\"k\">}</span>","                range<span class=\"k\">.</span>collapse<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","            <span class=\"k\">}</span>","            range<span class=\"k\">.</span>select<span class=\"k\">(</span><span class=\"k\">true</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        notNeedUndo <span class=\"k\">:</span> <span class=\"s\">1</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    <span class=\"k\">function</span> isBoundaryNode<span class=\"k\">(</span>node<span class=\"k\">,</span>dir<span class=\"k\">)</span><span class=\"k\">{</span>","        <span class=\"k\">var</span> tmp<span class=\"k\">;</span>","        <span class=\"k\">while</span><span class=\"k\">(!</span>domUtils<span class=\"k\">.</span>isBody<span class=\"k\">(</span>node<span class=\"k\">))</span><span class=\"k\">{</span>","            tmp <span class=\"k\">=</span> node<span class=\"k\">;</span>","            node <span class=\"k\">=</span> node<span class=\"k\">.</span>parentNode<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>tmp <span class=\"k\">!==</span> node<span class=\"k\">[</span>dir<span class=\"k\">])</span><span class=\"k\">{</span>","                <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","        <span class=\"k\">return</span> <span class=\"k\">true</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span><span class=\"s\">'keydown'</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span>type<span class=\"k\">,</span> evt<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> rng <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">();</span>","","        <span class=\"k\">if</span><span class=\"k\">(!</span>rng<span class=\"k\">.</span>collapsed <span class=\"k\">&amp;&amp;</span> <span class=\"k\">!(</span>evt<span class=\"k\">.</span>ctrlKey <span class=\"k\">||</span> evt<span class=\"k\">.</span>metaKey <span class=\"k\">||</span> evt<span class=\"k\">.</span>shiftKey <span class=\"k\">||</span> evt<span class=\"k\">.</span>altKey<span class=\"k\">))</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> tmpNode <span class=\"k\">=</span> rng<span class=\"k\">.</span>startContainer<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>domUtils<span class=\"k\">.</span>isFillChar<span class=\"k\">(</span>tmpNode<span class=\"k\">))</span><span class=\"k\">{</span>","                rng<span class=\"k\">.</span>setStartBefore<span class=\"k\">(</span>tmpNode<span class=\"k\">)</span>","            <span class=\"k\">}</span>","            tmpNode <span class=\"k\">=</span> rng<span class=\"k\">.</span>endContainer<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>domUtils<span class=\"k\">.</span>isFillChar<span class=\"k\">(</span>tmpNode<span class=\"k\">))</span><span class=\"k\">{</span>","                rng<span class=\"k\">.</span>setEndAfter<span class=\"k\">(</span>tmpNode<span class=\"k\">)</span>","            <span class=\"k\">}</span>","            rng<span class=\"k\">.</span>txtToElmBoundary<span class=\"k\">();</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>rng<span class=\"k\">.</span>startOffset <span class=\"k\">==</span> <span class=\"s\">0</span><span class=\"k\">)</span><span class=\"k\">{</span>","                tmpNode <span class=\"k\">=</span> rng<span class=\"k\">.</span>startContainer<span class=\"k\">;</span>","                <span class=\"k\">if</span><span class=\"k\">(</span>isBoundaryNode<span class=\"k\">(</span>tmpNode<span class=\"k\">,</span><span class=\"s\">'firstChild'</span><span class=\"k\">))</span><span class=\"k\">{</span>","                    tmpNode <span class=\"k\">=</span> rng<span class=\"k\">.</span>endContainer<span class=\"k\">;</span>","                    <span class=\"k\">if</span><span class=\"k\">(</span>rng<span class=\"k\">.</span>endOffset <span class=\"k\">==</span> rng<span class=\"k\">.</span>endContainer<span class=\"k\">.</span>childNodes<span class=\"k\">.</span>length <span class=\"k\">&amp;&amp;</span> isBoundaryNode<span class=\"k\">(</span>tmpNode<span class=\"k\">,</span><span class=\"s\">'lastChild'</span><span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","                        me<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'saveScene'</span><span class=\"k\">);</span>","                        me<span class=\"k\">.</span>body<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> <span class=\"s\">'&lt;p&gt;'</span><span class=\"k\">+(</span>browser<span class=\"k\">.</span>ie <span class=\"k\">?</span> <span class=\"s\">''</span> <span class=\"k\">:</span> <span class=\"s\">'&lt;br/&gt;'</span><span class=\"k\">)+</span><span class=\"s\">'&lt;/p&gt;'</span><span class=\"k\">;</span>","                        rng<span class=\"k\">.</span>setStart<span class=\"k\">(</span>me<span class=\"k\">.</span>body<span class=\"k\">.</span>firstChild<span class=\"k\">,</span><span class=\"s\">0</span><span class=\"k\">).</span>setCursor<span class=\"k\">(</span><span class=\"k\">false</span><span class=\"k\">,</span><span class=\"k\">true</span><span class=\"k\">);</span>","                        me<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'saveScene'</span><span class=\"k\">);</span>","                        browser<span class=\"k\">.</span>ie <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>_selectionChange<span class=\"k\">();</span>","                        <span class=\"k\">return</span><span class=\"k\">;</span>","                    <span class=\"k\">}</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"c\">//&#24555;&#25463;&#38190;</span>","    me<span class=\"k\">.</span>addshortcutkey<span class=\"k\">(</span><span class=\"k\">{</span>","         <span class=\"s\">\"selectAll\"</span> <span class=\"k\">:</span> <span class=\"s\">\"ctrl+65\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/selectall.js'][12]++;
UE.plugins.selectall = (function () {
  _$jscoverage['plugins/selectall.js'][13]++;
  var me = this;
  _$jscoverage['plugins/selectall.js'][14]++;
  me.commands.selectall = {execCommand: (function () {
  _$jscoverage['plugins/selectall.js'][17]++;
  var me = this, body = me.body, range = me.selection.getRange();
  _$jscoverage['plugins/selectall.js'][19]++;
  range.selectNodeContents(body);
  _$jscoverage['plugins/selectall.js'][20]++;
  if (domUtils.isEmptyBlock(body)) {
    _$jscoverage['plugins/selectall.js'][22]++;
    if ((browser.opera && body.firstChild && (body.firstChild.nodeType == 1))) {
      _$jscoverage['plugins/selectall.js'][23]++;
      range.setStartAtFirst(body.firstChild);
    }
    _$jscoverage['plugins/selectall.js'][25]++;
    range.collapse(true);
  }
  _$jscoverage['plugins/selectall.js'][27]++;
  range.select(true);
}), notNeedUndo: 1};
  _$jscoverage['plugins/selectall.js'][31]++;
  function isBoundaryNode(node, dir) {
    _$jscoverage['plugins/selectall.js'][32]++;
    var tmp;
    _$jscoverage['plugins/selectall.js'][33]++;
    while ((! domUtils.isBody(node))) {
      _$jscoverage['plugins/selectall.js'][34]++;
      tmp = node;
      _$jscoverage['plugins/selectall.js'][35]++;
      node = node.parentNode;
      _$jscoverage['plugins/selectall.js'][36]++;
      if ((tmp !== node[dir])) {
        _$jscoverage['plugins/selectall.js'][37]++;
        return false;
      }
}
    _$jscoverage['plugins/selectall.js'][40]++;
    return true;
}
  _$jscoverage['plugins/selectall.js'][42]++;
  me.addListener("keydown", (function (type, evt) {
  _$jscoverage['plugins/selectall.js'][43]++;
  var rng = me.selection.getRange();
  _$jscoverage['plugins/selectall.js'][45]++;
  if (((! rng.collapsed) && (! (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)))) {
    _$jscoverage['plugins/selectall.js'][46]++;
    var tmpNode = rng.startContainer;
    _$jscoverage['plugins/selectall.js'][47]++;
    if (domUtils.isFillChar(tmpNode)) {
      _$jscoverage['plugins/selectall.js'][48]++;
      rng.setStartBefore(tmpNode);
    }
    _$jscoverage['plugins/selectall.js'][50]++;
    tmpNode = rng.endContainer;
    _$jscoverage['plugins/selectall.js'][51]++;
    if (domUtils.isFillChar(tmpNode)) {
      _$jscoverage['plugins/selectall.js'][52]++;
      rng.setEndAfter(tmpNode);
    }
    _$jscoverage['plugins/selectall.js'][54]++;
    rng.txtToElmBoundary();
    _$jscoverage['plugins/selectall.js'][55]++;
    if ((rng.startOffset == 0)) {
      _$jscoverage['plugins/selectall.js'][56]++;
      tmpNode = rng.startContainer;
      _$jscoverage['plugins/selectall.js'][57]++;
      if (isBoundaryNode(tmpNode, "firstChild")) {
        _$jscoverage['plugins/selectall.js'][58]++;
        tmpNode = rng.endContainer;
        _$jscoverage['plugins/selectall.js'][59]++;
        if (((rng.endOffset == rng.endContainer.childNodes.length) && isBoundaryNode(tmpNode, "lastChild"))) {
          _$jscoverage['plugins/selectall.js'][60]++;
          me.fireEvent("saveScene");
          _$jscoverage['plugins/selectall.js'][61]++;
          me.body.innerHTML = ("<p>" + (browser.ie? "": "<br/>") + "</p>");
          _$jscoverage['plugins/selectall.js'][62]++;
          rng.setStart(me.body.firstChild, 0).setCursor(false, true);
          _$jscoverage['plugins/selectall.js'][63]++;
          me.fireEvent("saveScene");
          _$jscoverage['plugins/selectall.js'][64]++;
          (browser.ie && me._selectionChange());
          _$jscoverage['plugins/selectall.js'][65]++;
          return;
        }
      }
    }
  }
}));
  _$jscoverage['plugins/selectall.js'][72]++;
  me.addshortcutkey({"selectAll": "ctrl+65"});
});