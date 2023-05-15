Ext.onReady(function(){

    var campos = [{
        xtype: "numberfield",
        name: "id",
        fieldLabel: "Id",
        hidden: true
    },{
        xtype: "textfield",
        name: "tourist_name",
        fieldLabel: "Nombre",
        maxLength: 50,
        allowBlank: false
    },{
        xtype: "textfield",
        name: "tourist_email",
        fieldLabel: "E-mail",
        vtype: 'email'
    }];

    var botones = [{
        text: 'Guardar',
        formBind: true,
        iconCls: urlIconoCls + 'floppy-o',
        handler: function(){
            funAbcGuardar();
        }
    }];

    Ext.define('formas.abc.agregar',{
        extend: 'Ext.form.Panel',
        alias: 'widget.formas.abc.agregar',
        id: 'formas.abc.agregar',
        items: campos,
        buttons: botones,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        buttonAlign: 'right',
        initCompnent: function() {
            this.callParent(arguments)
        }
    })
})