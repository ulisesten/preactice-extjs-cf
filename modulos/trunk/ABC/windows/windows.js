Ext.onReady(function(){

    Ext.create('Ext.window.Window', {
        title: 'Agregar',
        id: 'windows.abc.agregar',
        height: 200,
        width: 400,
        modal: true,
        closeAction: 'hide',
        maximizable: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'formas.abc.agregar'
        }]
    }).hide();


    Ext.create('Ext.window.Window', {
        title: 'Cargar',
        id: 'windows.abc.cargar',
        height: 150,
        width: 400,
        modal: true,
        closeAction: 'hide',
        maximizable: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'formas.abc.cargar'
        }]
    }).hide();
    
})