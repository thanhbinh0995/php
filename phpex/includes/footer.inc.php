<div class="footerBox">
	<footer class="container">
		<div class="col-md-4">
			<article>
				<h1>Navigation</h1>
				<nav>
					<ul>
				 		<li><a href="index.php" title="">Home</a></li>
						<li><a href="#" title="">Archives</a></li>
						<li><a href="contact.php" title="">Contact</a></li>
						<li><?php if ($user) {echo "<a href='logout.php'>Logout</a>";} else {
							echo "<a href='login.php'></a>";
							} ?>
						</li>
						<li><a href="#" title="">Register</a></li>
					</ul>
				</nav>
			</article>
		</div>
		<div class="col-md-4">
			<article>
				<h1>Advertisement</h1>
				<img src="" alt="alignright">
				<p><a href="#" title="">Read more here...</a></p>
			</article>
		</div>
		<div class="col-md-4">
			<article>
				<h1>other stuff</h1>
				<ul>
					<?php if ($user && $user->canCreatePage()) echo "<li><a href='add_page.php'>Add a new page</a></li>"; ?>
					<li><a href="#" title="">This</a></li>
					<li><a href="#" title="">That</a></li>
					<li><a href="#" title="">Bar</a></li>
				</ul>
			</article>
		</div>
	</footer>
</div>