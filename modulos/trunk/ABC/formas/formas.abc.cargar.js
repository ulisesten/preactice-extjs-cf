Ext.onReady(function(){

    var campos = [{
        xtype: 'filefield',
        name: 'touristfile',
        id: 'touristfile',
        fieldLabel: 'Archivo',
        labelWidth: 50,
        allowBlank: false,
        anchor: '100%',
        buttonText: 'Select File...',
        accept: 'image/*'
    }]

    var botones = [{
        text: 'Guardar',
        iconCls: urlIconoCls + 'floppy-o',
        handler: function(){
            funAbcCargar();
        }
    }]


    Ext.define('formas.abc.cargar', {
        extend: 'Ext.form.Panel',
        alias: 'widget.formas.abc.cargar',
        id: 'formas.abc.cargar',
        items: campos,
        buttons: botones,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        buttonAlign: 'right',
        padding: '2 2 2 2',
        initComponent: function(){
            this.callParent(arguments)
        }
    })

})