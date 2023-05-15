Ext.onReady(function(){

    var items = [{
        text: 'Agregar',
        iconCls: urlIconoCls + 'plus',
        handler: function(){
            funAbcVenAgregar();
        }
    },{
        text: 'Editar',
        iconCls: urlIconoCls + 'pencil',
        handler: function(){
            funAbcVenEditar();
        }
    },{
        text: 'Eliminar',
        iconCls: urlIconoCls + 'trash',
        handler: function(){
            funAbcEliminar();
        }
    },{
        text: 'Herramientas',
        iconCls: urlIconoCls + 'gear',
        handler: function(){
            funAbcVenCargar();
        }
    }]

    Ext.define('toolbars.abc.buscar', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'toolbars.abc.buscar',
        items: items
    })
})