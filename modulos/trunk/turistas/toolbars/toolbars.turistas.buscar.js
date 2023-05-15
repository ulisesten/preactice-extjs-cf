Ext.onReady(function(){

    var items = [{
        text: 'Agregar',
        iconCls: urlIconoCls + 'plus',
        handler: function(){
            funTurVenAgregar();
        }
    },{
        text: 'Editar',
        iconCls: urlIconoCls + 'pencil',
        handler: function(){
            funTurVenEditar();
        }
    },{
        text: 'Eliminar',
        iconCls: urlIconoCls + 'trash',
        handler: function(){
            funTurEliminar();
        }
    }]

    Ext.define('toolbars.turistas.buscar', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'toolbars.turistas.buscar',
        items: items
    })
})