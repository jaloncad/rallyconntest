Ext.define('CustomApp', {
	extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        console.log("wow!!!");
        
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
            	scope: this,
                load: function(myStore, myData, success) {
                    console.log('get data', myStore, myData, success);
                    
                    var myGrid = Ext.create('Rally.ui.grid.Grid', {
                    	store: myStore,
                    	columnCfgs: ['FormattedID',
                    	             'Name','ScheduleState'
                    	             ]
                    });
                    
                    console.log('mygrid', myGrid);
                    this.add(myGrid);
                }
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    }
});
