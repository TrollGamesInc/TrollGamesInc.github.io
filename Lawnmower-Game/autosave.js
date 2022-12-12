<p class="AutosavePopup">
    <span class="AutosaveMessages"></span>
    <a href="#" class="Save" style="display:none">Save</a>
    <input type="submit" value="Save without Ajax" />
</p>
<div id="load-wait"
     style="position: fixed; z-index: 100; left: 0; right: 0; top: 0; bottom: 0;
            background: rgba(0,0,0,.6);
            display: none">
</div>
<script>$('#load-wait').show();</script>

<form class="Autosave">
    <!-- your actual fields -->
    <!-- your autosave popup including Save button, per above example -->
</form>
<script type="text/javascript" src="autosave.js"></script>
<script type="text/javascript">$('#load-wait').fadeOut();</script>
