salla.onReady()
  .then(() => salla.lang.onLoaded())
  .then(async () => {
    try {
      const response = await salla.api.component.getMenus();
      const { data } = response;
      console.log(data)

      // Wait for URL parameters to be available
      setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('filters[category_id]');

        if (!categoryId) {
          console.warn('⚠️ No category_id found in URL.');
          return;
        }

        console.log('🔍 Looking for category ID:', categoryId);

        let foundCategory = null;
        let targetChildren = [];

        // Search in level 1 (main categories)
        foundCategory = data.find(cat => cat.id == categoryId);
        
        // If not found in level 1, search in level 2 (direct children of main categories)
        if (!foundCategory) {
          for (const category of data) {
            if (category.children && category.children.length > 0) {
              foundCategory = category.children.find(child => child.id == categoryId);
              if (foundCategory) break;
            }
          }
        }

        if (foundCategory) {
          console.log('✅ Found category:', foundCategory.name || foundCategory.title);
          
          // Get the children of the found category
          if (foundCategory.children && foundCategory.children.length > 0) {
            targetChildren = foundCategory.children;
          }
          
          console.log('📋 Children to display:', targetChildren);

          if (targetChildren.length > 0) {
            setTimeout(() => {
              const container = document.createElement('div');
              container.className = 'subcategories-navigation';
              
              container.innerHTML = `
                <div style="
                  padding: 20px;
                  background: #f8f9fa;
                  border-bottom: 1px solid #dee2e6;
                  margin-bottom: 20px;
                ">
                 
                  <div style="
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                    scrollbar-color: #6c757d #f1f1f1;
                    padding-bottom: 5px;
                  ">
                    ${targetChildren.map(sub => `
                      <a href="${sub.url || '#'}" style="
                        padding: 6px 12px;
                        background: #6c757d;
                        color: white;
                        text-decoration: none;
                        border-radius: 3px;
                        font-size: 13px;
                        white-space: nowrap;
                        flex-shrink: 0;
                      ">${sub.name || sub.title}</a>
                    `).join('')}
                  </div>
                </div>
              `;

              // Add custom scrollbar styling for Webkit browsers
              const style = document.createElement('style');
              style.textContent = `
                .subcategories-navigation div::-webkit-scrollbar {
                  height: 6px;
                }
                .subcategories-navigation div::-webkit-scrollbar-track {
                  background: #f1f1f1;
                  border-radius: 3px;
                }
                .subcategories-navigation div::-webkit-scrollbar-thumb {
                  background: #6c757d;
                  border-radius: 3px;
                }
                .subcategories-navigation div::-webkit-scrollbar-thumb:hover {
                  background: #5a6268;
                }
              `;
              document.head.appendChild(style);

              // Insert after .page-header
              const targetElement = document.querySelector('.page-header');
              if (targetElement) {
                targetElement.insertAdjacentElement('afterend', container);
                console.log('✅ Subcategories navigation added successfully');
              } else {
                document.body.prepend(container);
                console.warn('⚠️ .page-header not found, added to body instead');
              }
            }, 500);
          } else {
            console.warn(`❌ No children found for category: ${foundCategory.name || foundCategory.title}`);
          }
        } else {
          console.warn(`❌ No category found with ID: ${categoryId}`);
          console.log('Available level 1 categories:', data.map(cat => ({ id: cat.id, name: cat.name })));
        }
      }, 2000);
    } catch (error) {
      salla.logger.error('Error fetching menus:', error);
    }
  });
