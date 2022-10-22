export default {
	test({ assert, component, raf }) {
		component.visible = false;

		raf.tick(50);
		assert.equal(component.destroyed, true);
	}
};
