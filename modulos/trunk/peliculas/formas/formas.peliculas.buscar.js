Ext.onReady(function(){

    var campos = [{
        xtype: 'textfield',
        name: 'title',
        filedLabel: 'Title'
    }];

    var botones = [{
        text: 'Buscar',
        iconCls: urlIconoCls + 'search',
        handler: function(){
            funPeliBuscar();
        }
    },{
        text: 'Limpiar',
        handler: function(){

        }
    }];


    Ext.define('formas.peliculas.buscar',{
        extend: 'Ext.form.Panel',
        alias: 'widget.formas.peliculas.buscar',
        id: 'formas.peliculas.buscar',
        items: campos,
        buttons: botones,
        buttonAlign: 'left',
        padding: '8 8 8 8',
        initComponent: function() {
            this.callParent(arguments);
        }
    })

})