<?php

class Admin_DeleteBookTest extends \WP_UnitTestCase {

	/**
	 * @group deletebook
	 */
	public function test_init() {
		$class = \Pressbooks\Admin\Delete\Book::init();
		$this->assertInstanceOf( '\Pressbooks\Admin\Delete\Book', $class );
	}

	/**
	 * @group deletebook
	 */
	public function test_deleteBookEmailContent() {
		$delete_book = new \Pressbooks\Admin\Delete\Book();
		$content = $delete_book->deleteBookEmailContent( 'WordPress' );
		$this->assertStringNotContainsString( 'WordPress,', $content );
		$this->assertStringContainsString( 'Pressbooks', $content );
	}

	/**
	 * @group deletebook
	 */
	public function test_addMenu() {
		$delete_book = new \Pressbooks\Admin\Delete\Book();
		require_once ABSPATH . WPINC . '/class-wp-admin-bar.php';
		$admin_bar = new \WP_Admin_Bar();
		$delete_book->addMenu( $admin_bar );
		$node = $admin_bar->get_node( 'delete-book' );
		$this->assertTrue( is_object( $node ) );
		$this->assertEquals( $node->id, 'delete-book' );
		$this->assertEquals( $node->parent, 'site-name' );
	}
}
