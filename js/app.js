var $$ = Dom7;
var theme = 'auto';
var app = new Framework7({
  id: 'com.moawservices.direct_message',
  root: '#app',
 name: 'Direct Message',
  theme: theme,
   
  stackPages:true, 
  
  view: {
		pushState: false,
		}, 
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  touch: {
    tapHold: true,
    disableContextMenu:true,
  },
  smartSelect:
		{
			closeOnSelect:true,
		}
});


