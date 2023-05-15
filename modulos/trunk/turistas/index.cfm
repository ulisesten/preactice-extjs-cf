<cfoutput>

    <cfset ext6 = '../../../generales/ext-6.2.0/'>
    <link rel="stylesheet" type="text/css" href="#ext6#build/classic/theme-triton/resources/theme-triton-all.css">

    <script type="text/javascript" src="#ext6#build/ext-all.js"></script>
    <script type="text/javascript" src="#ext6#locale/ext-lang-es.js"></script>

    <!-- Funciones -->
    <script type="text/javascript" src="funciones/fun.constantes.js"></script>
    <script type="text/javascript" src="funciones/fun.turistas.js"></script>

    <!-- Combos -->
    <script type="text/javascript" src="combos/combos.turistas.js"></script>

    <!-- Formas -->
    <script type="text/javascript" src="formas/formas.turistas.buscar.js"></script>
    <script type="text/javascript" src="formas/formas.turistas.agregar.js"></script>

    <!-- Toolbars -->
    <script type="text/javascript" src="toolbars/toolbars.turistas.buscar.js"></script>

    <!-- Grids -->
    <script type="text/javascript" src="grids/grids.turistas.buscar.js"></script>

    <!-- Windows -->
    <script type="text/javascript" src="windows/windows.js"></script>


</cfoutput>
<script>
    Ext.onReady(function() {

        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'formas.turistas.buscar',
                border: 0
            },{
                xtype: 'grids.turistas.buscar',
                flex: 1
            }]
        })
    })
</script>