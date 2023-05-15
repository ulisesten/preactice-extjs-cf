Ext.onReady(function(){

    var campos = [{
        xtype: "textfield",
        name: "tourist_name",
        fieldLabel: "Tipo"
    },{
        xtype: 'combos.abc',
        name: 'id'
    }];

    var botones = [{
        text: "Buscar",
        iconCls: urlIconoCls + 'search',
        handler: function(){
            funAbcBuscar();
        }
        
    },{
        text: "Limpiar",
        handler: function(){
            funAbcLimpiar();
        }
    }];

    Ext.define('formas.abc.buscar', {
        extend: 'Ext.form.Panel',
        alias: 'widget.formas.abc.buscar',
        id: 'formas.abc.buscar',
        items: campos,
        buttons: botones,
        buttonAlign: 'left',
        initComponent: function(){
            this.callParent(arguments)
        }
    })

})