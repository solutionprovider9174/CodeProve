<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript">
</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js" type="text/javascript"></script>
    <script>
        $(function() {
            $("#datas").autocomplete({
                source: "/dashboard/",
                minLength: 1,
            });
      });
    </script>