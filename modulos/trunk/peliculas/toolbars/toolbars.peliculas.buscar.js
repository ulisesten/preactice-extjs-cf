Ext.onReady(function(){
    var items = [{
        text: 'Agregar',
        iconCls: urlIconoCls + 'plus',
        handler: function() {

        }
    },{
        text: 'Editar',
        iconCls: urlIconoCls + 'pencil',
        handler: function() {

        }
    },{
        text: 'Eliminar',
        iconCls: urlIconoCls + 'trash',
        handler: function () {

        }
    }];

    Ext.define('toolbars.peliculas.buscar', {
        extend: 'Ext.toolbar.Toolbar',
        xtype: 'toolbars.peliculas.buscar',
        items: items
    })
})