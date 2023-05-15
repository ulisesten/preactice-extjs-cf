Ext.onReady(function(){

    Ext.create('Ext.window.Window', {
        title: 'Agregar',
        id: 'windows.turistas.agregar',
        height: 250,
        width: 400,
        modal: true,
        closeAction: 'hide',
        maximizable: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'formas.turistas.agregar'
        }]
    }).hide();
})