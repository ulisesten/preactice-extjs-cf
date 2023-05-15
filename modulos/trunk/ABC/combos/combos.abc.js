Ext.onReady(function(){

    var touristArray = getLocalStorageArray(DATA_STORE_NAME);

    var store = Ext.create('Ext.data.Store',{
        fields: ['id', 'tourist_name'],
        autoLoad: true,
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

    Ext.define('combos.abc',{
        extend: 'Ext.form.field.ComboBox',
        alias: 'widget.combos.abc',
        fieldLabel: 'Turista',
        valueField: 'id',
        displayField: 'tourist_name',
        loadingText: 'Carganda...',
        queryMode: 'local',
        msgTarget: 'side',
        emptyText: 'Seleccionar...',
        autoLoadSto: true,
        listConfig: {
            getInnerTpl: function(){
                return '<div>{id} - {tourist_name}</div>'
            }
        },
        initComponent: function(){
            this.store = store;
            this.callParent(arguments)
        }
    })

})