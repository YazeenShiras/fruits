"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section_one}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <ul>
              <li>
                <p>Home</p>
                <Image
                  src="/icons/arrowDown.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </li>
              <li>
                <p>Shop</p>
                <Image
                  src="/icons/arrowDown.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </li>
              <li>
                <p>Blog</p>
                <Image
                  src="/icons/arrowDown.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </li>
              <li>
                <p>Pages</p>
                <Image
                  src="/icons/arrowDown.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </li>
              <li>
                <p>Elements</p>
                <Image
                  src="/icons/arrowDown.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </li>
              <li>
                <p>Buy</p>
              </li>
            </ul>
          </div>
          <div className={styles.header_right}>
            <p>Login/Register</p>
            <Image src="/icons/search.svg" height={17} width={17} alt="" />
            <Image src="/icons/love.svg" height={20} width={20} alt="" />
            <div className={styles.cart}>
              <Image src="/icons/cart.svg" height={20} width={20} alt="" />
              <div className={styles.cart_count}>0</div>
            </div>
            <p>$0.00</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.layer_one}>
            <div className={styles.layer_one_top}>
              <div className={styles.rectangle}>
                <div className={styles.rectangle_top}>
                  <div className={styles.leaf1}>
                    <img src="/home/leaf1.png" alt="" />
                  </div>
                  <div className={styles.leaf2}>
                    <img src="/home/leaf2.png" alt="" />
                  </div>
                </div>
                <div className={styles.leaf3}>
                  <img src="/home/leaf3.png" alt="" />
                </div>
              </div>
              <div className={styles.bottle}>
                <img src="/home/bottle.png" alt="" />
              </div>
            </div>
            <div className={styles.orange}>
              <img src="/home/orange.png" alt="" />
            </div>
          </div>
          <div className={styles.layer2}>
            <h2>
              Juice <br /> Is The Best <br /> Drink For You
            </h2>
            <h4>It Is A Long Established Fact That A Reader Will</h4>
            <div className={styles.button_container}>
              <div className={styles.viewMore}>View More</div>
              <div className={styles.ShopNow}>Shop Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_two}>
        <div className={styles.products_container}>
          <div className={styles.product_one}>
            <div className={styles.product_title}>
              <h3 style={{ color: "#3b88cb" }}>Fruit Tea Pack</h3>
              <p>
                Three large packs of Fruit <br /> tea at the price of one.
              </p>
            </div>
            <img src="/products/1.png" />
          </div>
          <div className={styles.product_two}>
            <div className={styles.product_title}>
              <h3 style={{ color: "#90b72e" }}>Fruit Juice</h3>
              <p>
                Three large packs of Fruit <br /> tea at the price of one
              </p>
            </div>
            <img src="/products/2.png" alt="" />
          </div>
          <div className={styles.product_three}>
            <div className={styles.small_section}>
              <div className={styles.product_title}>
                <h3 style={{ color: "#c2275b" }}> Berries</h3>
                <p>
                  Forest wild <br /> berries.
                </p>
              </div>
              <img
                className={styles.product3_img}
                src="/products/3.png"
                alt=""
              />
            </div>
            <div className={styles.small_section}>
              <div className={styles.product_title}>
                <h3 style={{ color: "#d6b33c" }}>Citrus Tea</h3>
              </div>
              <img
                className={styles.product4_img}
                src="/products/4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_three}>
        <div className={styles.title}>
          <h2>Featured Products</h2>
          <img src="/home/underline.png" alt="" />
          <p>There are many variations of passage of lorem ipsum available</p>
        </div>
        <div className={styles.products_card_container}>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/5.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Rutum eget congue</h5>
              <p>Organic</p>
              <span>$239.00 - $269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/6.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Sed liguie magna</h5>
              <p>Organic</p>
              <span>$269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/7.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Bandit eauris aliquet</h5>
              <p>Organic</p>
              <span>$229.00 - $269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/8.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Porritor accumsan tincidunt</h5>
              <p>Organic</p>
              <span>$160.00 - $256.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/9.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Tortor vivamus suscipit</h5>
              <p>Organic</p>
              <span>$269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/10.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Blandid aquauet muaris</h5>
              <p>Organic</p>
              <span>$269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/11.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Suscipt eget tortor</h5>
              <p>Organic</p>
              <span>$269.00</span>
            </div>
          </div>
          <div className={styles.product_card}>
            <div className={styles.image}>
              <img src="/products/12.png" alt="" />
            </div>
            <div className={styles.product_details}>
              <h5>Cuarbitur arcu accumsan</h5>
              <p>Organic</p>
              <span>$269.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_four}>
        <div className={styles.section_four_left}>
          <img src="/home/mango.png" alt="" />
        </div>
        <div className={styles.right_section_four}>
          <h2>
            Blend fruits <br />
            premium drink
          </h2>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsun as therir defayl mode text, and a search for lorem isum will
            uncover.
          </p>
          <div className={styles.section_four_cards}>
            <div className={styles.section_four_card}>
              <h5>Fruits:</h5>
              <p>Feijoa, Pina, Manzana</p>
            </div>
            <div className={styles.section_four_card}>
              <h5>Packaging:</h5>
              <p>Glass Bottle</p>
            </div>
            <div className={styles.section_four_card}>
              <h5>Shelf Life:</h5>
              <p>One Month</p>
            </div>
            <div className={styles.section_four_card}>
              <h5>Bottle Size:</h5>
              <p>300ml</p>
            </div>
          </div>
          <div className={styles.section_four_buttons}>
            <div className={styles.viewMore}>View More</div>
            <div className={styles.goToShop}>Go To Shop</div>
          </div>
        </div>
      </div>
      <div className={styles.section_five}>
        <div className={styles.title}>
          <h2>Our Products</h2>
          <img src="/home/underline.png" alt="" />
          <p>There are many variations of passage of lorem ipsum available</p>
        </div>
        <div className={styles.nav_five}>
          <div className={styles.nav_card_five}>
            <Image src="/icons/icecream.png" height={30} width={30} alt="" />
            <p className={styles.active_nav_five}>Ice Cream</p>
          </div>
          <div className={styles.nav_card_five}>
            <Image src="/icons/fruittea.png" height={30} width={30} alt="" />
            <p>Fruit Tea</p>
          </div>
          <div className={styles.nav_card_five}>
            <Image src="/icons/fruitjam.png" height={30} width={30} alt="" />
            <p>Fruit Jam</p>
          </div>
          <div className={styles.nav_card_five}>
            <Image src="/icons/juice.png" height={30} width={30} alt="" />
            <p>Juice</p>
          </div>
          <div className={styles.nav_card_five}>
            <Image src="/icons/powder.png" height={30} width={30} alt="" />
            <p>Powder</p>
          </div>
        </div>
        <div className={styles.product_container_five}>
          <div className={styles.product_five}>
            <img src="/products/13.png" alt="" />
            <h6>Erat Curbitur acru</h6>
            <p>Organic</p>
            <span>$269.00</span>
          </div>
          <div className={styles.product_five}>
            <img src="/products/14.png" alt="" />
            <h6>Erat Curbitur acru</h6>
            <p>Organic</p>
            <span>$269.00</span>
          </div>
          <div className={styles.product_five}>
            <img src="/products/15.png" alt="" />
            <h6>Erat Curbitur acru</h6>
            <p>Organic</p>
            <span>$269.00</span>
          </div>
          <div className={styles.product_five}>
            <img src="/products/16.png" alt="" />
            <h6>Erat Curbitur acru</h6>
            <p>Organic</p>
            <span>$269.00</span>
          </div>
          <div className={styles.product_five}>
            <img src="/products/17.png" alt="" />
            <h6>Erat Curbitur acru</h6>
            <p>Organic</p>
            <span>$269.00</span>
          </div>
        </div>
      </div>
      <div className={styles.section_six}>
        <div className={styles.title}>
          <h2>Our Blog</h2>
          <img src="/home/underline.png" alt="" />
          <p>There are many variations of passage of lorem ipsum available</p>
        </div>
        <div className={styles.container_six}>
          <div className={styles.card_six}>
            <div className={styles.image_container_blog}>
              <img src="/blog/1.jpg" alt="" />
              <div className={styles.date}>
                <p>23</p>
                <span>JUL</span>
              </div>
            </div>
            <div className={styles.green_six}>Wooden Accessories</div>
            <h3>Nature-inspired outdoor seating</h3>
            <div className={styles.user_section}>
              <p>
                Posted by <img src="/blog/avatar.jpg" alt="" /> S.Rogers
              </p>
              <div className={styles.comment}>
                <Image src="icons/comment.svg" height={15} width={15} alt="" />
                <div className={styles.commentCount}>0</div>
              </div>
              <Image src="icons/share.svg" height={15} width={15} alt="" />
            </div>
            <p>
              Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu
              vestbulum nibh urna nam consequat erat molestie lacinia honcus.
              Nisl a diamid...
            </p>
            <span>Continue Reading</span>
          </div>

          <div className={styles.card_six}>
            <div className={styles.image_container_blog}>
              <img src="/blog/2.jpg" alt="" />
              <div className={styles.date}>
                <p>23</p>
                <span>JUL</span>
              </div>
            </div>
            <div className={styles.green_six}>Design Trends, Furniture</div>
            <h3>Nature-inspired outdoor seating</h3>
            <div className={styles.user_section}>
              <p>
                Posted by <img src="/blog/avatar.jpg" alt="" /> S.Rogers
              </p>
              <div className={styles.comment}>
                <Image src="icons/comment.svg" height={15} width={15} alt="" />
                <div className={styles.commentCount}>0</div>
              </div>
              <Image src="icons/share.svg" height={15} width={15} alt="" />
            </div>
            <p>
              Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu
              vestbulum nibh urna nam consequat erat molestie lacinia honcus.
              Nisl a diamid...
            </p>
            <span>Continue Reading</span>
          </div>

          <div className={styles.card_six}>
            <div className={styles.image_container_blog}>
              <img src="/blog/3.jpg" alt="" />
              <div className={styles.date}>
                <p>23</p>
                <span>JUL</span>
              </div>
            </div>
            <div className={styles.green_six}>Wooden Accessories</div>
            <h3>Nature-inspired outdoor seating</h3>
            <div className={styles.user_section}>
              <p>
                Posted by <img src="/blog/avatar.jpg" alt="" /> S.Rogers
              </p>
              <div className={styles.comment}>
                <Image src="icons/comment.svg" height={15} width={15} alt="" />
                <div className={styles.commentCount}>0</div>
              </div>
              <Image src="icons/share.svg" height={15} width={15} alt="" />
            </div>
            <p>
              Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu
              vestbulum nibh urna nam consequat erat molestie lacinia honcus.
              Nisl a diamid...
            </p>
            <span>Continue Reading</span>
          </div>
        </div>
      </div>
      <div className={styles.section_seven}>
        <div className={styles.container_seven}>
          <div className={styles.left_seven}>
            <img src="/home/strawberry.png" alt="" />
          </div>
          <div className={styles.right_seven}>
            <h2>
              Proud & Punch premium <br /> natural fruit ice cream
            </h2>
            <p>
              A latin professor at Ahmdpen-Sydney College in virginia, looked up
              one of the more obscrue latin words, consectetur, from a lorem
              isum passage and going through the.
            </p>
            <div className={styles.cards_seven}>
              <div className={styles.card_seven}>
                <h4>20</h4>
                <p>Ingredients</p>
                <span>Make type specimen book</span>
              </div>
              <div className={styles.card_seven}>
                <h4>460</h4>
                <p>Package Weight</p>
                <span>When looking at its layout</span>
              </div>
              <div className={styles.card_seven}>
                <h4>135</h4>
                <p>Calories Only</p>
                <span>More recently with desktop</span>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.strawberry} src="/home/berry.png" alt="" />
      </div>
      <div className={styles.section_common}>
        <div className={styles.section_eight}>
          <div className={styles.title}>
            <h2>How It Works</h2>
            <img src="/home/underline.png" alt="" />
            <p>There are many variations of passage of lorem ipsum available</p>
          </div>
          <div className={styles.container_eight}>
            <div className={styles.left_eight}>
              <div className={styles.card_left_eight}>
                <div className={styles.left_card_eight}>
                  <h5>Overall Health</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
                <Image src="/icons/health.png" height={70} width={70} alt="" />
              </div>
              <div className={styles.card_left_eight}>
                <div className={styles.left_card_eight}>
                  <h5>Pesticide reduction</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
                <Image
                  src="/icons/pesticide.png"
                  height={70}
                  width={70}
                  alt=""
                />
              </div>
              <div className={styles.card_left_eight}>
                <div className={styles.left_card_eight}>
                  <h5>Antibiotoc resistance</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
                <Image
                  src="/icons/antibiotic.png"
                  height={70}
                  width={70}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.center_eight}>
              <img src="/home/camu.png" alt="" />
            </div>
            <div className={styles.right_eight}>
              <div className={styles.card_right_eight}>
                <Image
                  src="/icons/antooxidant.png"
                  height={70}
                  width={70}
                  alt=""
                />
                <div className={styles.right_card_eight}>
                  <h5>Antioxidant capacity</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
              </div>
              <div className={styles.card_right_eight}>
                <Image
                  src="/icons/environmental.png"
                  height={70}
                  width={70}
                  alt=""
                />
                <div className={styles.right_card_eight}>
                  <h5>Environmental safety</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
              </div>
              <div className={styles.card_right_eight}>
                <Image src="/icons/immune.png" height={70} width={70} alt="" />
                <div className={styles.right_card_eight}>
                  <h5>Immune system boost</h5>
                  <p>
                    All the ipsum generators on the internet tend to repeat
                    predefined chunks as necessary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_nine}>
          <div className={styles.title}>
            <h2>Testimonials</h2>
            <img src="/home/underline.png" alt="" />
            <p>There are many variations of passage of lorem ipsum available</p>
          </div>
          <div className={styles.conainer_nine}>
            <div className={styles.card_nine}>
              <img src="/blog/avatar.jpg" alt="" />
              <p>
                When an unknown printertook a gallery of typw and scrambled it
                to make a type specimen book. It has survived no only five
                centuries.
              </p>
              <div className={styles.name}>
                <span>Preston Lenox</span> - Google Inc
              </div>
            </div>
            <div className={styles.card_nine}>
              <img src="/blog/avatar3.jpg" alt="" />
              <p>
                When an unknown printertook a gallery of typw and scrambled it
                to make a type specimen book. It has survived no only five
                centuries.
              </p>
              <div className={styles.name}>
                <span>Judie Jep</span> - Google Inc
              </div>
            </div>
            <div className={styles.card_nine}>
              <img src="/blog/avtar2.jpg" alt="" />
              <p>
                When an unknown printertook a gallery of typw and scrambled it
                to make a type specimen book. It has survived no only five
                centuries.
              </p>
              <div className={styles.name}>
                <span>Gordon Amyas</span> - Google Inc
              </div>
            </div>
          </div>
          <div className={styles.leaveReview}>Leave A Review</div>
        </div>
      </div>
      <div className={styles.section_ten}>
        <div className={styles.container_ten}>
          <div className={styles.card_ten}>
            <h4>New Products</h4>
            <div className={styles.product_ten}>
              <img src="/products/15.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Solicitudin molestie malesu</p>
                <span>$269.00</span>
              </div>
            </div>
            <div className={styles.product_ten}>
              <img src="/products/9.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Tortor vivamus suscript</p>
                <span>$269.00</span>
              </div>
            </div>
            <div className={styles.product_ten}>
              <img src="/products/14.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Dolor amet consectetur</p>
                <span>$269.00</span>
              </div>
            </div>
          </div>
          <div className={styles.card_ten}>
            <h4>Featured</h4>
            <div className={styles.product_ten}>
              <img src="/products/8.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Portitior Accummsan tincidunt</p>
                <span>$169.00 - $256.00</span>
              </div>
            </div>
            <div className={styles.product_ten}>
              <img src="/products/15.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Solicitudin molestie malesu</p>
                <span>$269.00</span>
              </div>
            </div>
            <div className={styles.product_ten}>
              <img src="/products/17.png" alt="" />
              <div className={styles.details_product_ten}>
                <p>Accumsan nulia portitor</p>
                <span>$269.00</span>
              </div>
            </div>
          </div>
          <div className={styles.card_ten}>
            <h4>Twitter</h4>
            <div className={styles.product_ten}>
              <img src="/products/10.png" alt="" />
              <div className={styles.details_product_ten}>
                <div className={styles.content}>
                  1 CHANGE + 1 HASTAG = 1 MEAL We want cooking to inspire
                  personal change - and social good.
                  <br /> For each use of...
                  <br />
                  <span>https://t.co/6vyWH3hoUG</span>
                </div>
                <div className={styles.date_ten}>2 months ago</div>
              </div>
            </div>
            <div className={styles.product_ten}>
              <img src="/products/10.png" alt="" />
              <div className={styles.details_product_ten}>
                <div className={styles.content}>
                  1 CHANGE + 1 HASTAG = 1 MEAL We want cooking to inspire
                  personal change - and social good.
                  <br />
                </div>
                <div className={styles.date_ten}>5 months ago</div>
              </div>
            </div>
          </div>
          <div className={styles.card_ten}>
            <h4>Instagram</h4>
            <div className={styles.card_ten_grid}>
              <img src="/instagram/1.jpg" alt="" />
              <img src="/instagram/2.jpg" alt="" />
              <img src="/instagram/3.jpg" alt="" />
              <img src="/instagram/4.jpg" alt="" />
              <img src="/instagram/5.jpg" alt="" />
              <img src="/instagram/6.jpg" alt="" />
              <img src="/instagram/7.jpg" alt="" />
              <img src="/instagram/8.jpg" alt="" />
              <img src="/instagram/9.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
