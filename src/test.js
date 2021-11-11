new RGBELoader()
					.setPath( 'textures/equirectangular/' )
					.load( 'royal_esplanade_1k.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						scene.background = texture;
						scene.environment = texture;

						render();

						// model

						// use of RoughnessMipmapper is optional
						const roughnessMipmapper = new RoughnessMipmapper( renderer );
						loader.load( 'DamagedHelmet.gltf', function ( gltf ) {

							gltf.scene.traverse( function ( child ) {

								if ( child.isMesh ) {

									roughnessMipmapper.generateMipmaps( child.material );

								}

							} );

							scene.add( gltf.scene );

							roughnessMipmapper.dispose();

							render();

						} );

					} );
