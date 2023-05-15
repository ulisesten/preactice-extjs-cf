Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store',{
        fields: ['id', 'tourist_name'],
        autoLoad: true,
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

    Ext.define('combos.turistas',{
        extend: 'Ext.form.field.ComboBox',
        alias: 'widget.combos.turistas',
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