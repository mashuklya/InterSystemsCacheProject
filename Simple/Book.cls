Class Simple.Book Extends (%Persistent, %Populate, %Library.DynamicAbstractObject)
{
/// Имя
Property Name As %String [ Required ];

/// Телефон
Property Author As %String;

classMethod Insert(nm As %String = "", ath As %String = "")
{

    set allEmpty = ((nm = "") && (ath = ""))
    quit:(allEmpty)  // if all data is empty just quit
    &sql(insert into simple.book (Name, Author)
         values (:nm, :ath))
    if (SQLCODE = 0) {
        &sql(select count(*) into :count from simple.book)
        write !, count, " records"
    }
    else {
        write !, "SQLCODE: ", SQLCODE, !, %msg
   }
}
Method %OnNew(name As %String = "", author As %String = "") As %Status [ Private, ServerOnly = 1 ]
{
	set ..Name = name
	set ..Author = author
	Quit $$$OK
}

Storage Default
{
<Data name="BookDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Author</Value>
</Value>
</Data>
<DataLocation>^Simple.BookD</DataLocation>
<DefaultData>BookDefaultData</DefaultData>
<IdLocation>^Simple.BookD</IdLocation>
<IndexLocation>^Simple.BookI</IndexLocation>
<StreamLocation>^Simple.BookS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}