Ext.onReady(function(){
    var columnas = [{
        header: 'Id',
        dataIndex: 'id',
        hidden: true
    },{
        header: 'Nombre',
        dataIndex: 'tourist_name',
        width: 200
    },{
        header: 'E-mail',
        dataIndex: 'tourist_email',
        width: 250
    },{
        header: 'Locación',
        dataIndex: 'tourist_location',
        width: 100
    }]

    var pageSize = 10;

    var store = Ext.create('Ext.data.Store', {
        pageSize: pageSize,
        proxy: {
            type: 'ajax',
            url: urlTuristas,
            extraParams: paramsTurBuscar,
            reader: {
                type: 'json',
                root: 'CONSULTA',
                idProperty: 'id',
                totalProperty: 'NUMREGISTROS'
            }
        }
    })

    Ext.define('grids.turistas.buscar', {
        extend: 'Ext.grid.GridPanel',
        xtype: 'grids.turistas.buscar',
        id: 'grids.turistas.buscar',
        columns: columnas,
        store: store,
        autoLoad: true,
        height: 200,
        width: 400,
        renderTo: Ext.getBody(),
        selModel: {
            selType: 'checkboxmodel',

        },
        dockedItems: [{
            xtype: 'toolbars.turistas.buscar'
        },{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            store: store
        }],
        listeners: {
            itemdblclick: function(){
                funTurVenEditar();
            }
        },
        initComponent: function() {
            this.callParent(arguments)
        }
    })
})