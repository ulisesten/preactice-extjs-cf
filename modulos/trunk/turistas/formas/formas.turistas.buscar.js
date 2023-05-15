Ext.onReady(function(){

    var campos = [{
        xtype: "textfield",
        name: "tourist_name",
        fieldLabel: "Nombre"
    }, {
        xtype: 'combos.turistas',
        name: 'id'
    }]

    var botones = [{
        text: "Buscar",
        iconCls: urlIconoCls + 'search',
        handler: function(){
            funTurBuscar();
        }
        
    },{
        text: "Limpiar",
        handler: function(){
            funTurLimpiar();
        }
    }]

    Ext.define('formas.turistas.buscar', {
        extend: 'Ext.form.Panel',
        alias: 'widget.formas.turistas.buscar',
        id: 'formas.turistas.buscar',
        items: campos,
        buttons: botones,
        buttonAlign: 'left',
        padding: '2 2 2 2',
        initComponent: function() {
            this.callParent(arguments)
        }
    })

})