
# Table of Contents

1.  [date-input](#orgc54d88a)
2.  [demo gif](#org982c642)
    1.  [type your date](#org779ce44)
    2.  [valdate when you blur it](#org98999d5)
    3.  [validate when you type the full date](#org1f4f321)
3.  [Have a try ?](#org128f636)
4.  [Import in your project](#org23be83c)
5.  [Roadmap](#org4ff9d13)


<a id="orgc54d88a"></a>

# date-input

a react component for date input, totally manual input field

available props

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Props</td>
<td class="org-left">description</td>
<td class="org-left">option?</td>
<td class="org-left">comment</td>
</tr>


<tr>
<td class="org-left">value</td>
<td class="org-left">the initial date Value</td>
<td class="org-left">yes</td>
<td class="org-left">format "YYYY-MM-DD"</td>
</tr>


<tr>
<td class="org-left">onChange</td>
<td class="org-left">callback function</td>
<td class="org-left">yes</td>
<td class="org-left">call when you type in any field</td>
</tr>


<tr>
<td class="org-left">onBlur</td>
<td class="org-left">callback function</td>
<td class="org-left">yes</td>
<td class="org-left">call when you blur the whole DateInput</td>
</tr>


<tr>
<td class="org-left">minDate</td>
<td class="org-left">the min date</td>
<td class="org-left">yes</td>
<td class="org-left">if the date you fill in is before minDate will get error</td>
</tr>


<tr>
<td class="org-left">maxDate</td>
<td class="org-left">the max date</td>
<td class="org-left">yes</td>
<td class="org-left">if the date you fill in is after maxDate will get error</td>
</tr>
</tbody>
</table>


<a id="org982c642"></a>

# demo gif


<a id="org779ce44"></a>

## type your date

![img](doc/dateInput.gif)


<a id="org98999d5"></a>

## valdate when you blur it

![img](doc/dateInput-validateOnBlur.gif)


<a id="org1f4f321"></a>

## validate when you type the full date

![img](doc/dateInput-validateOnFinish.gif)


<a id="org128f636"></a>

# Have a try ?

    yarn install
    yarn storybook

then feel free to have a try


<a id="org23be83c"></a>

# Import in your project

    yarn add date-input

then date-input will appear in your package.json,

    import DateInput from 'date-input';

import this component in your source code


<a id="org4ff9d13"></a>

# Roadmap

-   [X] add props minDate and maxDate which can be exactly date or relative date.
-   [] add more validate Rules for user to choose, like [isFutureDate, isPastDate]
-   [] allow user to pass into customized validate rules, error messages
-   [] support date format like MM/YYYY, which is useful like expire date of credit card
-   [] support customized style

