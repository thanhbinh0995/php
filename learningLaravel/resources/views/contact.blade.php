@extends('layout')
@section('content')
	<h1>Contact</h1>
	<p>please contact us by sending a message using the form below</p>
	{{ Form::open(array('url' => 'contact')) }}
	{{ Form::label('Subject') }}
	{{ Form::text('subject','Enter you subject') }}
	<br>
	{{ Form::label('Message') }}
	{{ Form::textarea('message','Enter your message') }}
	<br>
	{{ Form::submit() }}
	{{ Form::close() }}
@stop