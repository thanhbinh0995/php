<?php
	require_once 'connect.php';
	$res = mysqli_query($con,"SELECT * FROM shopping");
?>
<table>
	<caption>Go shopping</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Prize</th>
			<th>Buy</th>
		</tr>
	</thead>
	<tbody>
			<?php
			while ($product = mysqli_fetch_assoc($res)) {
				?>
				<tr>
					<th><?php echo $product['id']; ?></th>	
					<th><?php echo $product['name']; ?></th>	
					<th><?php echo $product['prize']; ?></th>	
					<th><a href="" title="">Order Now</a></th>	
				</tr>
			<?php  
			}
			?>
			
	</tbody>
</table>		