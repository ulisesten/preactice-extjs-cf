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
        header: 'File',
        dataIndex: 'tourist_file',
        width: 250,
        listeners: {
            itemdblclick: function(){
                console.log('hola')
            }
        }
    }]

    var pageSize = 10;

    var touristArray;
    localStorage.getItem("tourist_list")? touristArray = JSON.parse(localStorage.getItem("tourist_list")) : touristArray = []; 

    var store = Ext.create('Ext.data.Store', {
        pageSize: pageSize,
        /*proxy: {
            type: 'ajax',
            url: urlAbc,
            extraParams: paramsAbcBuscar,
            reader: {
                type: 'json',
                root: 'CONSULTA',
                idProperty: 'id',
                totalProperty: 'NUMREGISTROS'
            }
        }*/
        data: touristArray
    })

    Ext.define('grids.abc.buscar', {
        extend: 'Ext.grid.GridPanel',
        xtype: 'grids.abc.buscar',
        id: 'grids.abc.buscar',
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
            xtype: 'toolbars.abc.buscar'
        },{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            store: store
        }],
        listeners: {
            itemdblclick: function(){
                //funAbcVenEditar();
            }
        },
        initComponent: function() {
            this.callParent(arguments)
        }
    })
})