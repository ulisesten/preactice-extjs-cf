Ext.onReady(function(){

    var columnas = [{
        header: 'Id',
        dataIndex: 'id',
        hidden: true
    },{
        header: 'Title',
        dataIndex: 'title',
        flex: 1
    },{
        header: 'Overview',
        dataIndex: 'overview',
        flex: 3
    }]

    var pageSize = 10;

    var store = Ext.create('Ext.data.Store', {
        pageSize: pageSize,
        proxy: {
            type: 'rest',
            url: urlPeliculas,
            extraParams: paramsPeliBuscar,
            reader: {
                type: 'json',
                root: 'CONSULTA',
                idProperty: 'id',
                totalProperty: 'NUMREGISTROS'
            }
        }
    })


    Ext.define('grids.peliculas.buscar', {
        extend: 'Ext.grid.GridPanel',
        xtype: 'grids.peliculas.buscar',
        id: 'grids.peliculas.buscar',
        columns: columnas,
        store: store,
        autoLoad: true,
        height: 200,
        width: 300,
        renderTo: Ext.getBody(),
        selModel: {
            selType: 'checkboxmodel'
        },
        dockedItems: [{
            xtype: 'toolbars.peliculas.buscar'
        }],
        initComponent: function() {

            this.callParent(arguments);

        }
    })

})