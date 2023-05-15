var funPeliBuscar = function(){
    var formBuscar = Ext.getCmp('formas.peliculas.buscar').getForm(),
        gridBuscar = Ext.getCmp('grids.peliculas.buscar'),
        store      = gridBuscar.getStore();

    Ext.apply(store.getProxy().extraParams, formBuscar.getValues());
    store.loadPage(1);
}