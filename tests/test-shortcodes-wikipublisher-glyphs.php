<?php

class Shortcodes_WikiPublisher_GlyphsTest extends \WP_UnitTestCase {

	/**
	 * @var \Pressbooks\Shortcodes\Wikipublisher\Glyphs
	 * @group shortcodes
	 */
	protected $glyphs;


	/**
	 * @group shortcodes
	 */
	public function set_up() {
		parent::set_up();

		$this->glyphs = $this->getMockBuilder( '\Pressbooks\Shortcodes\Wikipublisher\Glyphs' )
							->setMethods( null )// pass null to setMethods() to avoid mocking any method
							->disableOriginalConstructor()// disable private constructor
							->getMock();
	}

	/**
	 * @group shortcodes
	 */
	public function test_langShortcode_grk() {

		$content = $this->glyphs->langShortcode(
			[ 'lang' => 'grc' ],
			'aeiou'
		);

		$this->assertStringContainsString( '<span lang="grc"', $content );
		$this->assertStringContainsString( '&#945;&#949;&#953;&#959;&#965;', $content );

		$content = $this->glyphs->langShortcode(
			[ 'lang' => 'ell' ],
			'aeiou'
		);

		$this->assertStringContainsString( '<span lang="el"', $content );
		$this->assertStringContainsString( '&#945;&#949;&#953;&#959;&#965;', $content );
	}

	/**
	 * @group shortcodes
	 */
	public function test_langShortcode_he() {

		$content = $this->glyphs->langShortcode(
			[ 'lang' => 'hbo' ],
			'aeiou'
		);

		$this->assertStringContainsString( '<span lang="he"', $content );
		$this->assertStringContainsString( '&#1463;&#1461;&#1460;&#1465;&#1467;', $content );
	}

	/**
	 * @group shortcodes
	 */
	public function test_langShortcode_bad() {

		$content = $this->glyphs->langShortcode(
			[ 'lang' => 'foobar' ],
			'aeiou'
		);

		$this->assertStringContainsString( 'ERROR', $content );
	}

}
