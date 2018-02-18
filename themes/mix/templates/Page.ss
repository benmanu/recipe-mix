<!doctype html>
<html lang="$ContentLocale">
    <head>
        <% base_tag %>
        <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        $MetaTags(false)
    </head>
    <body>
        <div id="app"></div>

        <script src="{$ThemeDir}/dist/manifest.js"></script>
        <script src="{$ThemeDir}/dist/vendor.js"></script>
        <script src="{$ThemeDir}/dist/app.js" defer></script>
    </body>
</html>