<cfcomponent>

    <cffunction name="abcBuscar" access="remote" returntype="struct">

        
    
        <cfset structReturn = {CONSULTA = [], NUMREGISTROS = 0}>

        <cfreturn structReturn>

    </cffunction>


    <cffunction name="abcGuardar" access="remote" returntype="struct">

        <cfset structReturn = {CONSULTA = structNew(), MESSAGE = "SUCCESS", ERRORS = 0, TRUNCATED = 0}>

        <cfreturn structReturn>

    </cffunction>

</cfcomponent>