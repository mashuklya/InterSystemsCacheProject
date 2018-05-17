Class Simple.Person Extends (%Persistent, %Populate, %Library.DynamicAbstractObject)
{
/// Имя
Property Name As %String [ Required ];





Storage Default
{
<Data name="PersonDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DataLocation>^Simple.PersonD</DataLocation>
<DefaultData>PersonDefaultData</DefaultData>
<IdLocation>^Simple.PersonD</IdLocation>
<IndexLocation>^Simple.PersonI</IndexLocation>
<StreamLocation>^Simple.PersonS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
