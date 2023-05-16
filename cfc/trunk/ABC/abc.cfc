<cfcomponent>

    <cffunction name="abcGetFile" access="remote" httpmethod="GET">
    
        <cfif isDefined("url.filename")>
        
            <cfscript>
                var myfile = FileRead("C:\ColdFusion2018\cfusion\wwwroot\Trainning\modulos\trunk\ABC\data\#url.filename#");
            </cfscript>
            
            <cfset structReturn = "#myfile#">
            <cfcontent type="application/pdf" file="C:\ColdFusion2018\cfusion\wwwroot\Trainning\modulos\trunk\ABC\data\#url.filename#"> 

        <cfelse>
            <cfset structReturn = "No content">
        
        </cfif>

        

    </cffunction>


    <cffunction name="abcGuardar" access="remote" returntype="struct" httpmethod="POST">

        <cfif isDefined("form.tourist_file")>
            
            <cfscript>
                //filename = createTimeSpan(1,1,1,1) & ".pdf"
                FileWrite("C:\ColdFusion2018\cfusion\wwwroot\Trainning\modulos\trunk\ABC\data\#form.filename#", "#form.tourist_file#"); 
            </cfscript> 
            <cfset structReturn = {CONSULTA = {filename: form.filename}, MESSAGE = "Se subio el archivo", ERRORS = 0, TRUNCATED = 0}>

        <cfelse>
            <cfset structReturn = {CONSULTA = structNew(), MESSAGE = "ERROR", ERRORS = 0, TRUNCATED = 0}>
        </cfif>

        <cfreturn structReturn>

    </cffunction>

</cfcomponent>