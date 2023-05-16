<cfoutput>

    <cfset ext6 = '../../../generales/ext-6.2.0/'>
    <link rel="stylesheet" type="text/css" href="#ext6#build/classic/theme-triton/resources/theme-triton-all.css">

    <script type="text/javascript" src="#ext6#build/ext-all.js"></script>
    <script type="text/javascript" src="#ext6#locale/ext-lang-es.js"></script>
    <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>

    <!-- Funciones -->
    <script type="text/javascript" src="../../../generales/FileSaver.min.js"></script>
    <script type="text/javascript" src="funciones/fun.abc.constantes.js"></script>
    <script type="text/javascript" src="funciones/fun.abc.js"></script>

    <!-- Combos -->
    <script type="text/javascript" src="combos/combos.abc.js"></script>

    <!-- Formas -->
    <script type="text/javascript" src="formas/formas.abc.buscar.js"></script>
    <script type="text/javascript" src="formas/formas.abc.agregar.js"></script>
    <script type="text/javascript" src="formas/formas.abc.cargar.js"></script>

    <!-- Toolbars -->
    <script type="text/javascript" src="toolbars/toolbars.abc.buscar.js"></script>

    <!-- Grids -->
    <script type="text/javascript" src="grids/grids.abc.buscar.js"></script>

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
                xtype: 'formas.abc.buscar'
            },{
                xtype: 'grids.abc.buscar',
                flex: 1
            }]
        })

    })
</script>