let psalm = [
    {
      number: 1,
      content: /*html*/ `
  
          <div
                  x-data="BST.BibleVerses(&#39;https://www.biblestudytools.com/api/library/strongs/&#39;)"
                  x-init="updateVersePreferences(); initHighlighting()"
                  @site-pref-change.window="updateVersePreferences()"
                  @bible-highlighter.window="updateHighlightMode($event.detail)"
                  @strongs-link="getReferenceLibrary(&#39;nas&#39;, &#39;O&#39;, $event.detail)"
                  class="bible-verses"
                >
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="1"
                  >
                    <h3 class="font-bold block subject-heading text-xl mb-3 mt-5">
                      BOOK 1
                    </h3>
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-1.html"
                      >1</a
                    >
                    <h3 class="font-bold block subject-heading text-xl mb-3 mt-5">
                      The Righteous and the Wicked Contrasted.
                    </h3>
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-1.html"
                      >1</a
                    >
                    How
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0835"
                      title="Strong&#39;s Number: 0835"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0835&#39;)"
                      >blessed</span
                    >
                    is the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0376"
                      title="Strong&#39;s Number: 0376"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0376&#39;)"
                      >man</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0834"
                      title="Strong&#39;s Number: 0834"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0834&#39;)"
                      >who</span
                    >
                    <sup
                      id="cr-1"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >1</a
                      ></sup
                    >
                    does not
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01980"
                      title="Strong&#39;s Number: 01980"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01980&#39;)"
                      >walk</span
                    >
                    in the
                    <sup
                      id="cr-2"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >2</a
                      ></sup
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06098"
                      title="Strong&#39;s Number: 06098"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06098&#39;)"
                      >counsel</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07563"
                      title="Strong&#39;s Number: 07563"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07563&#39;)"
                      >wicked</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03808"
                      title="Strong&#39;s Number: 03808"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03808&#39;)"
                      >Nor</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05975"
                      title="Strong&#39;s Number: 05975"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05975&#39;)"
                      >stand</span
                    >
                    in the
                    <sup
                      id="fn-1"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="1"
                      data-identifier="fn1"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-footnotes"
                        >[a]</a
                      ></sup
                    ><sup
                      id="cr-3"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >3</a
                      ></sup
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01870"
                      title="Strong&#39;s Number: 01870"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01870&#39;)"
                      >path</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02400"
                      title="Strong&#39;s Number: 02400"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02400&#39;)"
                      >sinners</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03808"
                      title="Strong&#39;s Number: 03808"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03808&#39;)"
                      >Nor</span
                    >
                    <sup
                      id="cr-4"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >4</a
                      ></sup
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03427"
                      title="Strong&#39;s Number: 03427"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03427&#39;)"
                      >sit</span
                    >
                    in the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04186"
                      title="Strong&#39;s Number: 04186"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04186&#39;)"
                      >seat</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03887"
                      title="Strong&#39;s Number: 03887"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03887&#39;)"
                      >scoffers</span
                    >!
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="2"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-2.html"
                    >
                      2
                    </a>
                    But his
                    <sup
                      id="cr-5"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >5</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02656"
                      title="Strong&#39;s Number: 02656"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02656&#39;)"
                      >delight</span
                    >
                    is
                    <sup
                      id="cr-6"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >6</a
                      ></sup
                    >in the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08451"
                      title="Strong&#39;s Number: 08451"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08451&#39;)"
                      >law</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >, And in His
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08451"
                      title="Strong&#39;s Number: 08451"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08451&#39;)"
                      >law</span
                    >
                    he
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01897"
                      title="Strong&#39;s Number: 01897"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01897&#39;)"
                      >meditates</span
                    >
                    <sup
                      id="cr-7"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >7</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03119"
                      title="Strong&#39;s Number: 03119"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03119&#39;)"
                      >day</span
                    >
                    and
                    <sup
                      id="cr-8"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >8</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03915"
                      title="Strong&#39;s Number: 03915"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03915&#39;)"
                      >night</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="3"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-3.html"
                    >
                      3
                    </a>
                    He will be like
                    <sup
                      id="cr-9"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >9</a
                      ></sup
                    >a
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06086"
                      title="Strong&#39;s Number: 06086"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06086&#39;)"
                      >tree</span
                    >
                    firmly
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08362"
                      title="Strong&#39;s Number: 08362"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08362&#39;)"
                      >planted</span
                    >
                    by
                    <sup
                      id="fn-2"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="3"
                      data-identifier="fn2"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-footnotes"
                        >[b]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06388"
                      title="Strong&#39;s Number: 06388"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06388&#39;)"
                      >streams</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04325"
                      title="Strong&#39;s Number: 04325"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04325&#39;)"
                      >water</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0834"
                      title="Strong&#39;s Number: 0834"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0834&#39;)"
                      >Which</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05414"
                      title="Strong&#39;s Number: 05414"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05414&#39;)"
                      >yields</span
                    >
                    its
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06529"
                      title="Strong&#39;s Number: 06529"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06529&#39;)"
                      >fruit</span
                    >
                    in its
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06256"
                      title="Strong&#39;s Number: 06256"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06256&#39;)"
                      >season</span
                    >
                    And its
                    <sup
                      id="fn-3"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="3"
                      data-identifier="fn3"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-footnotes"
                        >[c]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05929"
                      title="Strong&#39;s Number: 05929"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05929&#39;)"
                      >leaf</span
                    >
                    does not
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05034"
                      title="Strong&#39;s Number: 05034"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05034&#39;)"
                      >wither</span
                    >; And
                    <sup
                      id="fn-4"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="3"
                      data-identifier="fn4"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-footnotes"
                        >[d]</a
                      ></sup
                    >in
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03605"
                      title="Strong&#39;s Number: 03605"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03605&#39;)"
                      >whatever</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0834"
                      title="Strong&#39;s Number: 0834"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0834&#39;)"
                      >*</span
                    >
                    he
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06213"
                      title="Strong&#39;s Number: 06213"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06213&#39;)"
                      >does</span
                    >,
                    <sup
                      id="cr-10"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >10</a
                      ></sup
                    >he
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06743"
                      title="Strong&#39;s Number: 06743"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06743&#39;)"
                      >prospers</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="4"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-4.html"
                    >
                      4
                    </a>
                    The
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07563"
                      title="Strong&#39;s Number: 07563"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07563&#39;)"
                      >wicked</span
                    >
                    are not
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03651"
                      title="Strong&#39;s Number: 03651"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03651&#39;)"
                      >so</span
                    >, But they are like
                    <sup
                      id="cr-11"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >11</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04671"
                      title="Strong&#39;s Number: 04671"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04671&#39;)"
                      >chaff</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0834"
                      title="Strong&#39;s Number: 0834"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0834&#39;)"
                      >which</span
                    >
                    the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07307"
                      title="Strong&#39;s Number: 07307"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07307&#39;)"
                      >wind</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05086"
                      title="Strong&#39;s Number: 05086"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05086&#39;)"
                      >drives</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05086"
                      title="Strong&#39;s Number: 05086"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05086&#39;)"
                      >away</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="5"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-5.html"
                    >
                      5
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05921"
                      title="Strong&#39;s Number: 05921"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05921&#39;)"
                      >Therefore</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03651"
                      title="Strong&#39;s Number: 03651"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03651&#39;)"
                      >*</span
                    >
                    <sup
                      id="cr-12"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >12</a
                      ></sup
                    >the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07563"
                      title="Strong&#39;s Number: 07563"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07563&#39;)"
                      >wicked</span
                    >
                    will not
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06965"
                      title="Strong&#39;s Number: 06965"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06965&#39;)"
                      >stand</span
                    >
                    in the
                    <sup
                      id="cr-13"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >13</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04941"
                      title="Strong&#39;s Number: 04941"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04941&#39;)"
                      >judgment</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03808"
                      title="Strong&#39;s Number: 03808"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03808&#39;)"
                      >Nor</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02400"
                      title="Strong&#39;s Number: 02400"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02400&#39;)"
                      >sinners</span
                    >
                    in
                    <sup
                      id="cr-14"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >14</a
                      ></sup
                    >the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05712"
                      title="Strong&#39;s Number: 05712"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05712&#39;)"
                      >assembly</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06662"
                      title="Strong&#39;s Number: 06662"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06662&#39;)"
                      >righteous</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="6"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/1-6.html"
                    >
                      6
                    </a>
                    For the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >
                    <sup
                      id="fn-5"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="6"
                      data-identifier="fn5"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-footnotes"
                        >[e]</a
                      ></sup
                    ><sup
                      id="cr-15"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >15</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03045"
                      title="Strong&#39;s Number: 03045"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03045&#39;)"
                      >knows</span
                    >
                    the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01870"
                      title="Strong&#39;s Number: 01870"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01870&#39;)"
                      >way</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06662"
                      title="Strong&#39;s Number: 06662"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06662&#39;)"
                      >righteous</span
                    >, But the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01870"
                      title="Strong&#39;s Number: 01870"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01870&#39;)"
                      >way</span
                    >
                    of
                    <sup
                      id="cr-16"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/1.html#references-crossreferences"
                        >16</a
                      ></sup
                    >the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07563"
                      title="Strong&#39;s Number: 07563"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07563&#39;)"
                      >wicked</span
                    >
                    will
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06"
                      title="Strong&#39;s Number: 06"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06&#39;)"
                      >perish</span
                    >.
                  </div>
                </div>
  
          ` /*html*/,
    },
  
    {
      number: 2,
      content: /*html*/ `
  
              <div
                  x-data="BST.BibleVerses(&#39;https://www.biblestudytools.com/api/library/strongs/&#39;)"
                  x-init="updateVersePreferences(); initHighlighting()"
                  @site-pref-change.window="updateVersePreferences()"
                  @bible-highlighter.window="updateHighlightMode($event.detail)"
                  @strongs-link="getReferenceLibrary(&#39;nas&#39;, &#39;O&#39;, $event.detail)"
                  class="bible-verses"
                >
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="1"
                  >
                    <h3 class="font-bold block subject-heading text-xl mb-3 mt-5">
                      The Reign of the LORD'S Anointed.
                    </h3>
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-1.html"
                      >1</a
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04100"
                      title="Strong&#39;s Number: 04100"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04100&#39;)"
                      >Why</span
                    >
                    are
                    <sup
                      id="cr-1"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >1</a
                      ></sup
                    >the
                    <sup
                      id="fn-1"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="1"
                      data-identifier="fn6"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[a]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01471"
                      title="Strong&#39;s Number: 01471"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01471&#39;)"
                      >nations</span
                    >
                    in an
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07283"
                      title="Strong&#39;s Number: 07283"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07283&#39;)"
                      >uproar</span
                    >
                    And the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03816"
                      title="Strong&#39;s Number: 03816"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03816&#39;)"
                      >peoples</span
                    >
                    <sup
                      id="cr-2"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >2</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01897"
                      title="Strong&#39;s Number: 01897"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01897&#39;)"
                      >devising</span
                    >
                    a
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07385"
                      title="Strong&#39;s Number: 07385"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07385&#39;)"
                      >vain</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07385"
                      title="Strong&#39;s Number: 07385"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07385&#39;)"
                      >thing</span
                    >?
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="2"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-2.html"
                    >
                      2
                    </a>
                    The
                    <sup
                      id="cr-3"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >3</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04428"
                      title="Strong&#39;s Number: 04428"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04428&#39;)"
                      >kings</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0776"
                      title="Strong&#39;s Number: 0776"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0776&#39;)"
                      >earth</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03320"
                      title="Strong&#39;s Number: 03320"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03320&#39;)"
                      >take</span
                    >
                    their
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03320"
                      title="Strong&#39;s Number: 03320"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03320&#39;)"
                      >stand</span
                    >
                    And the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07336"
                      title="Strong&#39;s Number: 07336"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07336&#39;)"
                      >rulers</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03245"
                      title="Strong&#39;s Number: 03245"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03245&#39;)"
                      >take</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03245"
                      title="Strong&#39;s Number: 03245"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03245&#39;)"
                      >counsel</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03162"
                      title="Strong&#39;s Number: 03162"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03162&#39;)"
                      >together</span
                    >
                    <sup
                      id="cr-4"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >4</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05921"
                      title="Strong&#39;s Number: 05921"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05921&#39;)"
                      >Against</span
                    >
                    the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >
                    and
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05921"
                      title="Strong&#39;s Number: 05921"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05921&#39;)"
                      >against</span
                    >
                    His
                    <sup
                      id="fn-2"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="2"
                      data-identifier="fn7"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[b]</a
                      ></sup
                    ><sup
                      id="cr-5"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >5</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04899"
                      title="Strong&#39;s Number: 04899"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04899&#39;)"
                      >Anointed</span
                    >, saying,
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="3"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-3.html"
                    >
                      3
                    </a>
                    "Let us
                    <sup
                      id="cr-6"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >6</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05423"
                      title="Strong&#39;s Number: 05423"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05423&#39;)"
                      >tear</span
                    >
                    their
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04147"
                      title="Strong&#39;s Number: 04147"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04147&#39;)"
                      >fetters</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05423"
                      title="Strong&#39;s Number: 05423"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05423&#39;)"
                      >apart</span
                    >
                    And
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07993"
                      title="Strong&#39;s Number: 07993"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07993&#39;)"
                      >cast</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07993"
                      title="Strong&#39;s Number: 07993"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07993&#39;)"
                      >away</span
                    >
                    their
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05688"
                      title="Strong&#39;s Number: 05688"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05688&#39;)"
                      >cords</span
                    >
                    from us!"
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="4"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-4.html"
                    >
                      4
                    </a>
                    He who
                    <sup
                      id="fn-3"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="4"
                      data-identifier="fn8"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[c]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03427"
                      title="Strong&#39;s Number: 03427"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03427&#39;)"
                      >sits</span
                    >
                    in the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08064"
                      title="Strong&#39;s Number: 08064"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08064&#39;)"
                      >heavens</span
                    >
                    <sup
                      id="cr-7"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >7</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07832"
                      title="Strong&#39;s Number: 07832"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07832&#39;)"
                      >laughs</span
                    >, The
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0136"
                      title="Strong&#39;s Number: 0136"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0136&#39;)"
                      >Lord</span
                    >
                    <sup
                      id="cr-8"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >8</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03932"
                      title="Strong&#39;s Number: 03932"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03932&#39;)"
                      >scoffs</span
                    >
                    at them.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="5"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-5.html"
                    >
                      5
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0227"
                      title="Strong&#39;s Number: 0227"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0227&#39;)"
                      >Then</span
                    >
                    He will
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01696"
                      title="Strong&#39;s Number: 01696"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01696&#39;)"
                      >speak</span
                    >
                    to them in His
                    <sup
                      id="cr-9"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >9</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0639"
                      title="Strong&#39;s Number: 0639"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0639&#39;)"
                      >anger</span
                    >
                    And
                    <sup
                      id="cr-10"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >10</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0926"
                      title="Strong&#39;s Number: 0926"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0926&#39;)"
                      >terrify</span
                    >
                    them in His
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02740"
                      title="Strong&#39;s Number: 02740"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02740&#39;)"
                      >fury</span
                    >, saying,
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="6"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-6.html"
                    >
                      6
                    </a>
                    "But as for Me, I have
                    <sup
                      id="fn-4"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="6"
                      data-identifier="fn9"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[d]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05258"
                      title="Strong&#39;s Number: 05258"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05258&#39;)"
                      >installed</span
                    >
                    <sup
                      id="cr-11"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >11</a
                      ></sup
                    >My
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04428"
                      title="Strong&#39;s Number: 04428"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04428&#39;)"
                      >King</span
                    >
                    Upon
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06726"
                      title="Strong&#39;s Number: 06726"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06726&#39;)"
                      >Zion</span
                    >,
                    <sup
                      id="cr-12"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >12</a
                      ></sup
                    >My
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06944"
                      title="Strong&#39;s Number: 06944"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06944&#39;)"
                      >holy</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02022"
                      title="Strong&#39;s Number: 02022"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02022&#39;)"
                      >mountain</span
                    >."
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="7"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-7.html"
                    >
                      7
                    </a>
                    "I will
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03588"
                      title="Strong&#39;s Number: 03588"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03588&#39;)"
                      >surely</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05608"
                      title="Strong&#39;s Number: 05608"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05608&#39;)"
                      >tell</span
                    >
                    of the
                    <sup
                      id="fn-5"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="7"
                      data-identifier="fn10"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[e]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02706"
                      title="Strong&#39;s Number: 02706"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02706&#39;)"
                      >decree</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >: He
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0559"
                      title="Strong&#39;s Number: 0559"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0559&#39;)"
                      >said</span
                    >
                    to Me, 'You are
                    <sup
                      id="cr-13"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >13</a
                      ></sup
                    >My
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01121"
                      title="Strong&#39;s Number: 01121"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01121&#39;)"
                      >Son</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03117"
                      title="Strong&#39;s Number: 03117"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03117&#39;)"
                      >Today</span
                    >
                    I have
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03205"
                      title="Strong&#39;s Number: 03205"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03205&#39;)"
                      >begotten</span
                    >
                    You.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="8"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-8.html"
                    >
                      8
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07592"
                      title="Strong&#39;s Number: 07592"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07592&#39;)"
                      >'Ask</span
                    >
                    of Me, and
                    <sup
                      id="cr-14"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >14</a
                      ></sup
                    >I will surely
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05414"
                      title="Strong&#39;s Number: 05414"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05414&#39;)"
                      >give</span
                    >
                    <sup
                      id="cr-15"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >15</a
                      ></sup
                    >the
                    <sup
                      id="fn-6"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="8"
                      data-identifier="fn11"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[f]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01471"
                      title="Strong&#39;s Number: 01471"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01471&#39;)"
                      >nations</span
                    >
                    as Your
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05159"
                      title="Strong&#39;s Number: 05159"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05159&#39;)"
                      >inheritance</span
                    >, And the very
                    <sup
                      id="cr-16"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >16</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0657"
                      title="Strong&#39;s Number: 0657"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0657&#39;)"
                      >ends</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0776"
                      title="Strong&#39;s Number: 0776"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0776&#39;)"
                      >earth</span
                    >
                    as Your
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0272"
                      title="Strong&#39;s Number: 0272"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0272&#39;)"
                      >possession</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="9"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-9.html"
                    >
                      9
                    </a>
                    'You shall
                    <sup
                      id="fn-7"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="9"
                      data-identifier="fn12"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[g]</a
                      ></sup
                    ><sup
                      id="cr-17"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >17</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07489"
                      title="Strong&#39;s Number: 07489"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07489&#39;)"
                      >break</span
                    >
                    them with a
                    <sup
                      id="fn-8"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="9"
                      data-identifier="fn13"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[h]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07626"
                      title="Strong&#39;s Number: 07626"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07626&#39;)"
                      >rod</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01270"
                      title="Strong&#39;s Number: 01270"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01270&#39;)"
                      >iron</span
                    >, You shall
                    <sup
                      id="cr-18"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >18</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05310"
                      title="Strong&#39;s Number: 05310"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05310&#39;)"
                      >shatter</span
                    >
                    them like
                    <sup
                      id="fn-9"
                      class="verse-reference verse-footnote text-blue-600 font-bold hidden"
                      :class="footnotes ? &#39;&#39; : &#39;hidden&#39;"
                      data-verseid="9"
                      data-identifier="fn14"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-footnotes"
                        >[i]</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03627"
                      title="Strong&#39;s Number: 03627"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03627&#39;)"
                      >earthenware</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03335"
                      title="Strong&#39;s Number: 03335"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03335&#39;)"
                      >*</span
                    >.' "
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="10"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-10.html"
                    >
                      10
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06258"
                      title="Strong&#39;s Number: 06258"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06258&#39;)"
                      >Now</span
                    >
                    therefore, O
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04428"
                      title="Strong&#39;s Number: 04428"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04428&#39;)"
                      >kings</span
                    >,
                    <sup
                      id="cr-19"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >19</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07919"
                      title="Strong&#39;s Number: 07919"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07919&#39;)"
                      >show</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07919"
                      title="Strong&#39;s Number: 07919"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07919&#39;)"
                      >discernment</span
                    >;
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03256"
                      title="Strong&#39;s Number: 03256"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03256&#39;)"
                      >Take</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03256"
                      title="Strong&#39;s Number: 03256"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03256&#39;)"
                      >warning</span
                    >, O
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08199"
                      title="Strong&#39;s Number: 08199"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08199&#39;)"
                      >judges</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0776"
                      title="Strong&#39;s Number: 0776"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0776&#39;)"
                      >earth</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="11"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-11.html"
                    >
                      11
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05647"
                      title="Strong&#39;s Number: 05647"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05647&#39;)"
                      >Worship</span
                    >
                    the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >
                    with
                    <sup
                      id="cr-20"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >20</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03374"
                      title="Strong&#39;s Number: 03374"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03374&#39;)"
                      >reverence</span
                    >
                    And
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01523"
                      title="Strong&#39;s Number: 01523"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01523&#39;)"
                      >rejoice</span
                    >
                    with
                    <sup
                      id="cr-21"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >21</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07461"
                      title="Strong&#39;s Number: 07461"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07461&#39;)"
                      >trembling</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="12"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/2-12.html"
                    >
                      12
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05401"
                      title="Strong&#39;s Number: 05401"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05401&#39;)"
                      >Do</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05401"
                      title="Strong&#39;s Number: 05401"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05401&#39;)"
                      >homage</span
                    >
                    to
                    <sup
                      id="cr-22"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >22</a
                      ></sup
                    >the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01248"
                      title="Strong&#39;s Number: 01248"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01248&#39;)"
                      >Son</span
                    >, that He not
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0599"
                      title="Strong&#39;s Number: 0599"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0599&#39;)"
                      >become</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0599"
                      title="Strong&#39;s Number: 0599"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0599&#39;)"
                      >angry</span
                    >, and you
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06"
                      title="Strong&#39;s Number: 06"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06&#39;)"
                      >perish</span
                    >
                    in the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01870"
                      title="Strong&#39;s Number: 01870"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01870&#39;)"
                      >way</span
                    >, For
                    <sup
                      id="cr-23"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >23</a
                      ></sup
                    >His
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0639"
                      title="Strong&#39;s Number: 0639"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0639&#39;)"
                      >wrath</span
                    >
                    may
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04592"
                      title="Strong&#39;s Number: 04592"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04592&#39;)"
                      >soon</span
                    >
                    be
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01197"
                      title="Strong&#39;s Number: 01197"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01197&#39;)"
                      >kindled</span
                    >. How
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0835"
                      title="Strong&#39;s Number: 0835"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0835&#39;)"
                      >blessed</span
                    >
                    are
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03605"
                      title="Strong&#39;s Number: 03605"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03605&#39;)"
                      >all</span
                    >
                    who
                    <sup
                      id="cr-24"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/2.html#references-crossreferences"
                        >24</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02620"
                      title="Strong&#39;s Number: 02620"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02620&#39;)"
                      >take</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02620"
                      title="Strong&#39;s Number: 02620"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02620&#39;)"
                      >refuge</span
                    >
                    in Him!
                  </div>
                </div>
  
          ` /*html*/,
    },
  
    {
      number: 3,
      content: /*html*/ `
  
      <div
                  x-data="BST.BibleVerses(&#39;https://www.biblestudytools.com/api/library/strongs/&#39;)"
                  x-init="updateVersePreferences(); initHighlighting()"
                  @site-pref-change.window="updateVersePreferences()"
                  @bible-highlighter.window="updateHighlightMode($event.detail)"
                  @strongs-link="getReferenceLibrary(&#39;nas&#39;, &#39;O&#39;, $event.detail)"
                  class="bible-verses"
                >
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="1"
                  >
                    <h3 class="font-bold block subject-heading text-xl mb-3 mt-5">
                      Morning Prayer of Trust in God.
                    </h3>
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-1.html"
                      >1</a
                    >
                    O
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04100"
                      title="Strong&#39;s Number: 04100"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04100&#39;)"
                      >how</span
                    >
                    <sup
                      id="cr-1"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >1</a
                      ></sup
                    >my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06862"
                      title="Strong&#39;s Number: 06862"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06862&#39;)"
                      >adversaries</span
                    >
                    have
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07231"
                      title="Strong&#39;s Number: 07231"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07231&#39;)"
                      >increased</span
                    >!
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07227"
                      title="Strong&#39;s Number: 07227"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07227&#39;)"
                      >Many</span
                    >
                    are
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06965"
                      title="Strong&#39;s Number: 06965"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06965&#39;)"
                      >rising</span
                    >
                    up
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05921"
                      title="Strong&#39;s Number: 05921"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05921&#39;)"
                      >against</span
                    >
                    me.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="2"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-2.html"
                    >
                      2
                    </a>
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07227"
                      title="Strong&#39;s Number: 07227"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07227&#39;)"
                      >Many</span
                    >
                    are
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0559"
                      title="Strong&#39;s Number: 0559"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0559&#39;)"
                      >saying</span
                    >
                    of my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05315"
                      title="Strong&#39;s Number: 05315"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05315&#39;)"
                      >soul</span
                    >,
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0369"
                      title="Strong&#39;s Number: 0369"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0369&#39;)"
                      >"There</span
                    >
                    is
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0369"
                      title="Strong&#39;s Number: 0369"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0369&#39;)"
                      >no</span
                    >
                    <sup
                      id="cr-2"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >2</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03444"
                      title="Strong&#39;s Number: 03444"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03444&#39;)"
                      >deliverance</span
                    >
                    for him in
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0430"
                      title="Strong&#39;s Number: 0430"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0430&#39;)"
                      >God</span
                    >."
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05542"
                      title="Strong&#39;s Number: 05542"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05542&#39;)"
                      >Selah</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="3"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-3.html"
                    >
                      3
                    </a>
                    But You, O
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >, are
                    <sup
                      id="cr-3"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >3</a
                      ></sup
                    >a
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="04043"
                      title="Strong&#39;s Number: 04043"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;04043&#39;)"
                      >shield</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01157"
                      title="Strong&#39;s Number: 01157"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01157&#39;)"
                      >about</span
                    >
                    me, My
                    <sup
                      id="cr-4"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >4</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03519"
                      title="Strong&#39;s Number: 03519"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03519&#39;)"
                      >glory</span
                    >, and the One who
                    <sup
                      id="cr-5"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >5</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07311"
                      title="Strong&#39;s Number: 07311"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07311&#39;)"
                      >lifts</span
                    >
                    my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07218"
                      title="Strong&#39;s Number: 07218"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07218&#39;)"
                      >head</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="4"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-4.html"
                    >
                      4
                    </a>
                    I was
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07121"
                      title="Strong&#39;s Number: 07121"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07121&#39;)"
                      >crying</span
                    >
                    to the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >
                    with my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06963"
                      title="Strong&#39;s Number: 06963"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06963&#39;)"
                      >voice</span
                    >, And He
                    <sup
                      id="cr-6"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >6</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06030"
                      title="Strong&#39;s Number: 06030"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06030&#39;)"
                      >answered</span
                    >
                    me from
                    <sup
                      id="cr-7"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >7</a
                      ></sup
                    >His
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06944"
                      title="Strong&#39;s Number: 06944"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06944&#39;)"
                      >holy</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="02022"
                      title="Strong&#39;s Number: 02022"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;02022&#39;)"
                      >mountain</span
                    >.
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05542"
                      title="Strong&#39;s Number: 05542"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05542&#39;)"
                      >Selah</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="5"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-5.html"
                    >
                      5
                    </a>
                    I
                    <sup
                      id="cr-8"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >8</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07901"
                      title="Strong&#39;s Number: 07901"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07901&#39;)"
                      >lay</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07901"
                      title="Strong&#39;s Number: 07901"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07901&#39;)"
                      >down</span
                    >
                    and
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03462"
                      title="Strong&#39;s Number: 03462"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03462&#39;)"
                      >slept</span
                    >; I
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07019"
                      title="Strong&#39;s Number: 07019"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07019&#39;)"
                      >awoke</span
                    >, for the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05564"
                      title="Strong&#39;s Number: 05564"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05564&#39;)"
                      >sustains</span
                    >
                    me.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="6"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-6.html"
                    >
                      6
                    </a>
                    I will
                    <sup
                      id="cr-9"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >9</a
                      ></sup
                    >not be
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03372"
                      title="Strong&#39;s Number: 03372"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03372&#39;)"
                      >afraid</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07233"
                      title="Strong&#39;s Number: 07233"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07233&#39;)"
                      >ten</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07233"
                      title="Strong&#39;s Number: 07233"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07233&#39;)"
                      >thousands</span
                    >
                    of
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05971"
                      title="Strong&#39;s Number: 05971"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05971&#39;)"
                      >people</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0834"
                      title="Strong&#39;s Number: 0834"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0834&#39;)"
                      >Who</span
                    >
                    have
                    <sup
                      id="cr-10"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >10</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07896"
                      title="Strong&#39;s Number: 07896"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07896&#39;)"
                      >set</span
                    >
                    themselves
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05921"
                      title="Strong&#39;s Number: 05921"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05921&#39;)"
                      >against</span
                    >
                    me
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05439"
                      title="Strong&#39;s Number: 05439"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05439&#39;)"
                      >round</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05439"
                      title="Strong&#39;s Number: 05439"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05439&#39;)"
                      >about</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="7"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-7.html"
                    >
                      7
                    </a>
                    <sup
                      id="cr-11"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >11</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="06965"
                      title="Strong&#39;s Number: 06965"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;06965&#39;)"
                      >Arise</span
                    >, O
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >;
                    <sup
                      id="cr-12"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >12</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03467"
                      title="Strong&#39;s Number: 03467"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03467&#39;)"
                      >save</span
                    >
                    me, O my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0430"
                      title="Strong&#39;s Number: 0430"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0430&#39;)"
                      >God</span
                    >! For You have
                    <sup
                      id="cr-13"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >13</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05221"
                      title="Strong&#39;s Number: 05221"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05221&#39;)"
                      >smitten</span
                    >
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03605"
                      title="Strong&#39;s Number: 03605"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03605&#39;)"
                      >all</span
                    >
                    my
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="0340"
                      title="Strong&#39;s Number: 0340"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;0340&#39;)"
                      >enemies</span
                    >
                    on the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03895"
                      title="Strong&#39;s Number: 03895"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03895&#39;)"
                      >cheek</span
                    >; You have
                    <sup
                      id="cr-14"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >14</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07665"
                      title="Strong&#39;s Number: 07665"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07665&#39;)"
                      >shattered</span
                    >
                    the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="08127"
                      title="Strong&#39;s Number: 08127"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;08127&#39;)"
                      >teeth</span
                    >
                    of the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="07563"
                      title="Strong&#39;s Number: 07563"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;07563&#39;)"
                      >wicked</span
                    >.
                  </div>
                  <div
                    class="p-1 px-2 md:px-3 leading-8 transition-colors rounded my-1"
                    data-verse-id="8"
                  >
                    <a
                      x-show="verseNumbers"
                      class="text-blue-600 font-bold"
                      href="https://www.biblestudytools.com/nas/psalms/3-8.html"
                    >
                      8
                    </a>
                    <sup
                      id="cr-15"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >15</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03444"
                      title="Strong&#39;s Number: 03444"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03444&#39;)"
                      >Salvation</span
                    >
                    belongs to the
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="03068"
                      title="Strong&#39;s Number: 03068"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;03068&#39;)"
                      >LORD</span
                    >; Your
                    <sup
                      id="cr-16"
                      class="verse-reference verse-crossreference text-blue-600 font-bold hidden"
                      :class="crossReferences ? &#39;&#39; : &#39;hidden&#39;"
                      ><a
                        href="https://www.biblestudytools.com/nas/psalms/3.html#references-crossreferences"
                        >16</a
                      ></sup
                    ><span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="01293"
                      title="Strong&#39;s Number: 01293"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;01293&#39;)"
                      >blessing</span
                    >
                    be upon Your
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05971"
                      title="Strong&#39;s Number: 05971"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05971&#39;)"
                      >people</span
                    >!
                    <span
                      class="strongs"
                      :class="strongs ? &#39;font-bold underline-dotted text-blue-600 cursor-pointer&#39; : &#39;&#39;"
                      data-strongs-number="05542"
                      title="Strong&#39;s Number: 05542"
                      @click="$dispatch(&#39;strongs-link&#39;, &#39;05542&#39;)"
                      >Selah</span
                    >.
                  </div>
                </div>
  
          ` /*html*/,
    },

]

console.log(psalm[2])
  