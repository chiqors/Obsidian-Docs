/**
 * CBPFWTabs2.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs2( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs2.prototype.options = {
		start : 0
	};

	CBPFWTabs2.prototype._init = function() {
		// tabs elems
		this.tabs = [].slice.call( this.el.querySelectorAll( '.subtabs > nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap2 > section' ) );
		// current index
		this.current = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	CBPFWTabs2.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	CBPFWTabs2.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current2';
		this.items[ this.current ].className = 'content-current';
	};

	// add to global namespace
	window.CBPFWTabs2 = CBPFWTabs2;

})( window );