import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Link } from './ui/link';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

// Sample blog post data - in a real implementation, this would come from a database or API
const BLOG_POSTS = {
  'beginners-guide-to-cross-stitching': {
    title: "Beginner's Guide to Cross Stitching",
    excerpt: "Learn the basics of cross stitching with our comprehensive guide for beginners. We cover everything from choosing materials to completing your first project.",
    coverImage: "/images/blog/beginners-guide.jpg",
    date: "June 15, 2025",
    author: "Sarah Johnson",
    category: "Tutorials",
    tags: ["beginners", "tutorial", "basics", "getting started"],
    content: `
      <h2>Introduction to Cross Stitching</h2>
      <p>Cross stitching is one of the oldest forms of embroidery and can be found all over the world. It's a form of counted thread embroidery that has been around for centuries, and it's one of the easiest forms of hand embroidery to learn.</p>
      
      <p>This beginner's guide will walk you through everything you need to know to start your cross stitching journey, from selecting the right materials to completing your first project.</p>
      
      <h2>Materials You'll Need</h2>
      <p>Before you begin cross stitching, you'll need to gather a few essential supplies:</p>
      
      <h3>Fabric</h3>
      <p>The most common fabric for cross stitch is Aida cloth, which is specifically designed for cross stitch with its evenly spaced holes. Aida comes in different "counts," which refers to the number of stitches per inch. For beginners, 14-count Aida is recommended as it's easier to see and work with.</p>
      
      <h3>Embroidery Floss</h3>
      <p>DMC is the most popular brand of embroidery floss for cross stitching. It comes in over 500 colors, is colorfast, and has a beautiful sheen. Each skein of DMC floss has six strands that can be separated, and most cross stitch patterns call for just two strands.</p>
      
      <h3>Needles</h3>
      <p>Cross stitch needles, also called tapestry needles, have a blunt tip and a larger eye to accommodate the embroidery floss. Size 24 needles are typically used with 14-count Aida cloth.</p>
      
      <h3>Scissors</h3>
      <p>Small, sharp scissors are essential for cutting your floss. Embroidery scissors are designed specifically for this purpose and are a worthwhile investment.</p>
      
      <h3>Hoop or Frame</h3>
      <p>An embroidery hoop or frame helps keep your fabric taut while you work, which can make stitching easier and result in more even stitches.</p>
      
      <h3>Pattern</h3>
      <p>You'll need a cross stitch pattern to follow. As a beginner, look for simple patterns with few colors and clear symbols.</p>
      
      <h2>Basic Cross Stitch Techniques</h2>
      
      <h3>Starting Your Thread</h3>
      <p>There are several ways to start your thread, but the "away knot" method is often easiest for beginners:</p>
      <ol>
        <li>Thread your needle with two strands of floss.</li>
        <li>Tie a small knot at the end of your thread.</li>
        <li>Start your first stitch from the top of the fabric, about an inch away from where you want to begin stitching.</li>
        <li>Once you've made a few stitches, you can clip the knot, and the tail will be secured by your stitches.</li>
      </ol>
      
      <h3>The Basic Cross Stitch</h3>
      <p>A cross stitch is simply two stitches that cross over each other to form an "X". Here's how to make one:</p>
      <ol>
        <li>Bring your needle up from the back of the fabric at the bottom left hole of where you want your stitch to be.</li>
        <li>Take your needle down through the top right hole.</li>
        <li>Bring your needle back up through the bottom right hole.</li>
        <li>Finally, take your needle down through the top left hole to complete the "X".</li>
      </ol>
      
      <p>It's important to make all your cross stitches in the same direction for a neat, uniform appearance. Most stitchers work the bottom leg of the stitch from bottom left to top right, and the top leg from bottom right to top left.</p>
      
      <h3>Ending Your Thread</h3>
      <p>When you're running out of thread or need to change colors:</p>
      <ol>
        <li>Flip your work over to the back side.</li>
        <li>Run your needle under several stitches on the back.</li>
        <li>Clip the excess thread close to the fabric.</li>
      </ol>
      
      <h2>Reading a Cross Stitch Pattern</h2>
      <p>Cross stitch patterns are essentially grids where each square represents one stitch. Each symbol on the grid corresponds to a specific color of floss, which is indicated in the pattern's key or legend.</p>
      
      <p>To read a pattern:</p>
      <ol>
        <li>Find the center of your pattern, which is usually marked with arrows or bold lines.</li>
        <li>Find the center of your fabric by folding it in half both ways and marking the center point.</li>
        <li>Start stitching from the center and work your way outward.</li>
        <li>Follow the symbols on the pattern, matching them to the corresponding colors in the key.</li>
      </ol>
      
      <h2>Your First Project</h2>
      <p>For your first project, choose something small and simple, like a bookmark or a small motif. This will allow you to practice your stitches without committing to a large, time-consuming project.</p>
      
      <p>Consider starting with a kit designed for beginners, which will include everything you need along with clear instructions.</p>
      
      <h2>Common Mistakes and How to Avoid Them</h2>
      
      <h3>Knots in Your Work</h3>
      <p>To avoid knots, don't use floss that's too long (18-24 inches is ideal), and let your needle and thread hang freely occasionally to untwist.</p>
      
      <h3>Uneven Tension</h3>
      <p>Try to maintain consistent tension in your stitches—not too tight, not too loose. Using a hoop or frame can help with this.</p>
      
      <h3>Miscounting</h3>
      <p>Count twice, stitch once! Double-check your counting before making each stitch, especially when starting a new section or color.</p>
      
      <h2>Caring for Your Finished Work</h2>
      <p>Once you've completed your project:</p>
      <ol>
        <li>Gently hand wash it in cool water with mild soap if it's dirty.</li>
        <li>Rinse thoroughly and roll in a clean towel to remove excess water.</li>
        <li>Lay flat to dry or iron on the reverse side on a padded surface.</li>
        <li>Frame or finish as desired.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Cross stitching is a rewarding hobby that allows you to create beautiful, personalized pieces of art. With this beginner's guide, you're well on your way to mastering the basics of cross stitching. Remember, practice makes perfect, so don't be discouraged if your first few stitches aren't exactly as you'd like. Keep stitching, and you'll improve with each project!</p>
      
      <p>Happy stitching!</p>
    `,
    relatedPosts: [
      'how-to-choose-the-right-fabric',
      'understanding-dmc-thread-colors-and-alternatives',
      'top-10-cross-stitch-pattern-ideas-for-beginners'
    ]
  },
  'how-to-choose-the-right-fabric': {
    title: "How to Choose the Right Fabric for Your Cross Stitch Project",
    excerpt: "Discover the different types of fabrics and how to select the best one for your cross stitch project. We compare Aida, evenweave, and linen options.",
    coverImage: "/images/blog/fabric-guide.jpg",
    date: "June 10, 2025",
    author: "Emma Williams",
    category: "Materials",
    tags: ["fabric", "aida", "evenweave", "linen", "materials"],
    content: `
      <h2>Introduction to Cross Stitch Fabrics</h2>
      <p>The fabric you choose for your cross stitch project can dramatically affect both the stitching experience and the final result. Different fabrics offer various textures, appearances, and levels of difficulty. This guide will help you understand the different types of cross stitch fabrics and how to choose the right one for your project.</p>
      
      <h2>Understanding Fabric Count</h2>
      <p>Before diving into fabric types, it's important to understand what "count" means in cross stitching. The count refers to the number of stitches (or squares) per inch of fabric. For example:</p>
      <ul>
        <li>11-count fabric has 11 stitches per inch</li>
        <li>14-count fabric has 14 stitches per inch</li>
        <li>18-count fabric has 18 stitches per inch</li>
        <li>28-count fabric has 28 stitches per inch</li>
      </ul>
      
      <p>As the count number increases, the holes in the fabric get smaller, resulting in smaller stitches and a more detailed finished piece. Lower count fabrics are generally easier for beginners, while higher counts are preferred for more detailed work.</p>
      
      <h2>Types of Cross Stitch Fabrics</h2>
      
      <h3>Aida Cloth</h3>
      <p>Aida is the most common fabric for cross stitch, especially for beginners. It's a stiff, even-weave fabric with visible holes that make counting stitches easier.</p>
      
      <h4>Pros of Aida:</h4>
      <ul>
        <li>Easy to see and count stitches</li>
        <li>Holds its shape well</li>
        <li>Available in many colors and counts</li>
        <li>Affordable and widely available</li>
      </ul>
      
      <h4>Cons of Aida:</h4>
      <ul>
        <li>Stiffer texture that some find less comfortable to work with</li>
        <li>Limited to whole stitches (quarter and three-quarter stitches are difficult)</li>
        <li>Can have a more "blocky" appearance in the finished piece</li>
      </ul>
      
      <h4>Common Aida Counts:</h4>
      <ul>
        <li>11-count: Large stitches, good for children or those with vision impairments</li>
        <li>14-count: Standard for beginners, balanced between ease and detail</li>
        <li>16-count: Slightly more detailed than 14-count</li>
        <li>18-count: More detailed, good for intermediate stitchers</li>
        <li>22-count: Very detailed, for experienced stitchers</li>
      </ul>
      
      <h3>Evenweave Fabric</h3>
      <p>Evenweave fabrics have threads that are evenly spaced in both directions, but unlike Aida, they don't have the obvious blocks. Common evenweave fabrics include Jobelan, Lugana, and Monaco.</p>
      
      <h4>Pros of Evenweave:</h4>
      <ul>
        <li>Smoother appearance than Aida</li>
        <li>Allows for quarter and three-quarter stitches</li>
        <li>Good middle ground between Aida and linen</li>
        <li>Available in various colors and counts</li>
      </ul>
      
      <h4>Cons of Evenweave:</h4>
      <ul>
        <li>Harder to count than Aida</li>
        <li>Typically more expensive than Aida</li>
        <li>May require more experience to work with</li>
      </ul>
      
      <h4>Common Evenweave Counts:</h4>
      <ul>
        <li>25-count: Often stitched over 2 threads (equivalent to 12.5-count)</li>
        <li>28-count: Often stitched over 2 threads (equivalent to 14-count)</li>
        <li>32-count: Often stitched over 2 threads (equivalent to 16-count)</li>
      </ul>
      
      <h3>Linen</h3>
      <p>Linen is a natural fiber fabric with a beautiful, organic texture. It's less uniform than Aida or evenweave, which gives finished pieces a distinctive, antique look.</p>
      
      <h4>Pros of Linen:</h4>
      <ul>
        <li>Beautiful, natural texture</li>
        <li>Elegant, high-end appearance</li>
        <li>Allows for quarter and three-quarter stitches</li>
        <li>Drapes beautifully when framed</li>
      </ul>
      
      <h4>Cons of Linen:</h4>
      <ul>
        <li>Most difficult to work with due to irregular threads</li>
        <li>Most expensive option</li>
        <li>Requires more experience to count accurately</li>
        <li>May have slubs or irregularities (though these add character)</li>
      </ul>
      
      <h4>Common Linen Counts:</h4>
      <ul>
        <li>28-count: Often stitched over 2 threads (equivalent to 14-count)</li>
        <li>32-count: Often stitched over 2 threads (equivalent to 16-count)</li>
        <li>36-count: Often stitched over 2 threads (equivalent to 18-count)</li>
        <li>40-count: Very fine, for experienced stitchers</li>
      </ul>
      
      <h2>Stitching "Over Two"</h2>
      <p>When working with evenweave or linen, stitchers often work "over two" threads, meaning each stitch covers two threads in both directions. This technique:</p>
      <ul>
        <li>Makes counting easier on higher-count fabrics</li>
        <li>Creates stitches similar in size to those on Aida of half the count (e.g., stitching over 2 on 28-count is similar to stitching on 14-count Aida)</li>
        <li>Allows for more detailed work, including quarter stitches</li>
      </ul>
      
      <h2>How to Choose the Right Fabric for Your Project</h2>
      
      <h3>Consider Your Experience Level</h3>
      <ul>
        <li>Beginners: Start with 14-count Aida</li>
        <li>Intermediate: Try 16 or 18-count Aida, or 28-count evenweave over 2</li>
        <li>Advanced: Experiment with higher counts or linen</li>
      </ul>
      
      <h3>Consider Your Pattern</h3>
      <ul>
        <li>Simple patterns with whole stitches work well on any fabric</li>
        <li>Patterns with quarter or three-quarter stitches are better on evenweave or linen</li>
        <li>Detailed patterns benefit from higher count fabrics</li>
        <li>Check if your pattern recommends a specific fabric type or count</li>
      </ul>
      
      <h3>Consider the Finished Size</h3>
      <p>The fabric count directly affects the finished size of your project. To calculate the finished size:</p>
      <ol>
        <li>Find the stitch count of your pattern (e.g., 140 stitches wide × 100 stitches high)</li>
        <li>Divide by the fabric count (e.g., on 14-count: 140 ÷ 14 = 10 inches wide, 100 ÷ 14 = 7.14 inches high)</li>
      </ol>
      
      <p>If you want a larger finished piece, choose a lower count fabric. For a smaller piece, choose a higher count.</p>
      
      <h3>Consider the Look You Want</h3>
      <ul>
        <li>Modern, crisp look: Aida</li>
        <li>Smooth, refined look: Evenweave</li>
        <li>Rustic, antique look: Linen</li>
      </ul>
      
      <h2>Fabric Colors</h2>
      <p>Cross stitch fabrics come in various colors beyond the traditional white and cream:</p>
      <ul>
        <li>White/Antique White: Classic, works with most patterns</li>
        <li>Black: Dramatic backdrop for bright colors</li>
        <li>Colored fabrics: Can enhance your design (e.g., blue for an ocean scene)</li>
        <li>Hand-dyed fabrics: Create unique effects and gradients</li>
      </ul>
      
      <p>When choosing a colored fabric, ensure it complements your thread colors and won't show through light-colored stitches.</p>
      
      <h2>Specialty Fabrics</h2>
      <p>Beyond the basic types, there are specialty fabrics for cross stitch:</p>
      <ul>
        <li>Waste canvas: Allows you to stitch on regular fabric like t-shirts</li>
        <li>Plastic canvas: Rigid plastic mesh for 3D projects</li>
        <li>Perforated paper: Paper with holes for quick projects and ornaments</li>
        <li>Hand-dyed fabrics: Unique colors and patterns for special projects</li>
      </ul>
      
      <h2>Caring for Your Fabric</h2>
      <p>Proper fabric care ensures your project looks its best:</p>
      <ul>
        <li>Pre-wash fabric if it will be washed after completion</li>
        <li>Iron gently before starting to remove creases</li>
        <li>Keep hands clean while stitching</li>
        <li>Store unfinished projects rolled rather than folded</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Choosing the right fabric for your cross stitch project is a personal decision based on your experience level, the pattern requirements, and the look you want to achieve. Don't be afraid to experiment with different fabrics as you gain experience—each type offers unique benefits and challenges that can enhance your cross stitching journey.</p>
      
      <p>Remember, there's no "perfect" fabric—only the right fabric for your specific project and preferences. Happy stitching!</p>
    `,
    relatedPosts: [
      'beginners-guide-to-cross-stitching',
      'understanding-dmc-thread-colors-and-alternatives',
      'how-to-frame-your-finished-cross-stitch-projects'
    ]
  },
  'color-theory-for-cross-stitch-patterns': {
    title: "Color Theory for Cross Stitch Patterns",
    excerpt: "Understanding color theory can help you create more vibrant and harmonious cross stitch patterns. Learn about color wheels, schemes, and combinations.",
    coverImage: "/images/blog/color-theory.jpg",
    date: "June 5, 2025",
    author: "Michael Chen",
    category: "Design",
    tags: ["color theory", "design", "color schemes", "pattern design"],
    content: `
      <h2>Introduction to Color Theory for Cross Stitch</h2>
      <p>Color is one of the most powerful elements in any cross stitch project. The right color combinations can make your pattern vibrant and eye-catching, while poor color choices can make even the most well-stitched piece fall flat. Understanding basic color theory will help you create more harmonious and impactful cross stitch patterns, whether you're designing your own or modifying existing ones.</p>
      
      <h2>The Color Wheel: Your Cross Stitch Companion</h2>
      <p>The color wheel is the foundation of color theory and an essential tool for cross stitch designers. It organizes colors in a logical sequence, making it easier to see how they relate to each other.</p>
      
      <h3>Primary Colors</h3>
      <p>Red, yellow, and blue are the primary colors. They cannot be created by mixing other colors and form the basis of all other colors.</p>
      
      <h3>Secondary Colors</h3>
      <p>Orange, green, and purple are secondary colors, created by mixing two primary colors:</p>
      <ul>
        <li>Red + Yellow = Orange</li>
        <li>Yellow + Blue = Green</li>
        <li>Blue + Red = Purple</li>
      </ul>
      
      <h3>Tertiary Colors</h3>
      <p>Tertiary colors are created by mixing a primary color with an adjacent secondary color, resulting in colors like red-orange, yellow-green, and blue-purple.</p>
      
      <h2>Color Properties in Cross Stitch</h2>
      <p>Understanding these three properties of color will help you make better choices for your cross stitch projects:</p>
      
      <h3>Hue</h3>
      <p>Hue refers to the pure color itself—red, blue, green, etc. In cross stitch, this corresponds to the basic color family of your floss.</p>
      
      <h3>Value</h3>
      <p>Value describes the lightness or darkness of a color. In cross stitch, using different values of the same color creates depth and dimension. DMC floss numbers typically group colors by hue, with variations in value (e.g., DMC 310-317 are different values of black/gray).</p>
      
      <h3>Saturation</h3>
      <p>Saturation refers to the intensity or purity of a color. Highly saturated colors are vivid, while less saturated colors appear more muted or gray. In cross stitch, you might choose highly saturated colors for focal points and less saturated colors for backgrounds.</p>
      
      <h2>Color Schemes for Harmonious Cross Stitch Patterns</h2>
      <p>Color schemes are predetermined combinations of colors based on their positions on the color wheel. Here are some classic color schemes that work well in cross stitch:</p>
      
      <h3>Monochromatic</h3>
      <p>A monochromatic scheme uses different values and saturations of a single hue. This creates a subtle, elegant look that's perfect for sophisticated cross stitch pieces.</p>
      <p><strong>Cross Stitch Application:</strong> Try a landscape using different shades of blue, from pale sky blue to deep navy. The limited palette creates a serene, cohesive look while still allowing for detail and depth.</p>
      
      <h3>Analogous</h3>
      <p>Analogous colors sit next to each other on the color wheel, such as blue, blue-green, and green. These create harmonious, comfortable designs.</p>
      <p><strong>Cross Stitch Application:</strong> Floral patterns work beautifully with analogous colors—imagine a bouquet using purples, red-purples, and reds for the flowers with green and yellow-green leaves.</p>
      
      <h3>Complementary</h3>
      <p>Complementary colors are opposite each other on the color wheel (e.g., red and green, blue and orange). They create maximum contrast and vibrance when used together.</p>
      <p><strong>Cross Stitch Application:</strong> Use complementary colors for designs where you want elements to pop—like red berries on green foliage in a holiday pattern.</p>
      
      <h3>Split Complementary</h3>
      <p>This scheme uses a base color plus the two colors adjacent to its complement. It provides high contrast but is less intense than a complementary scheme.</p>
      <p><strong>Cross Stitch Application:</strong> Try a yellow butterfly as your focal point against a background with blue-purple and red-purple elements.</p>
      
      <h3>Triadic</h3>
      <p>A triadic scheme uses three colors equally spaced around the color wheel, such as red, yellow, and blue. This creates a vibrant, balanced look.</p>
      <p><strong>Cross Stitch Application:</strong> Folk art patterns often use triadic color schemes for their bold, cheerful appearance.</p>
      
      <h3>Tetradic (Double Complementary)</h3>
      <p>This complex scheme uses four colors arranged in two complementary pairs. It offers rich possibilities but can be overwhelming if not balanced carefully.</p>
      <p><strong>Cross Stitch Application:</strong> Use this for complex scenes where you need a wide range of colors, like a detailed garden scene with blue/orange and red/green elements.</p>
      
      <h2>Translating Color Theory to DMC Floss</h2>
      <p>When applying color theory to cross stitch, you'll need to translate your color choices to specific floss numbers:</p>
      
      <h3>DMC Color Families</h3>
      <p>DMC organizes its floss in color families, which makes it easier to find variations of a particular hue:</p>
      <ul>
        <li>Whites/Blacks/Grays: 310-317, B5200</li>
        <li>Blues: 150s, 160s, 790s, 800s, 3800s</li>
        <li>Greens: 500s, 700s, 900s, 3300s</li>
        <li>Yellows: 300s, 700s, 3800s</li>
        <li>Oranges: 400s, 700s, 900s</li>
        <li>Reds: 300s, 600s, 700s, 800s, 900s</li>
        <li>Purples: 200s, 300s, 500s, 550s</li>
        <li>Browns: 300s, 400s, 600s, 700s, 800s, 900s</li>
      </ul>
      
      <h3>Creating a Color Palette</h3>
      <p>To create a cohesive color palette for your cross stitch project:</p>
      <ol>
        <li>Decide on a color scheme (e.g., complementary, analogous)</li>
        <li>Select your main colors based on this scheme</li>
        <li>For each main color, choose 2-3 values (lighter and darker versions)</li>
        <li>Consider adding a neutral (white, black, gray, or beige) for balance</li>
        <li>Test your palette by placing the threads together before starting</li>
      </ol>
      
      <h2>Color Considerations for Specific Cross Stitch Projects</h2>
      
      <h3>Portraits and Realistic Subjects</h3>
      <p>For realistic subjects, subtle variations in value are crucial:</p>
      <ul>
        <li>Use closely related colors for skin tones (e.g., DMC 754, 758, 761)</li>
        <li>Create depth with small value changes rather than dramatic hue shifts</li>
        <li>Consider using blended needles (two colors on one needle) for smoother transitions</li>
      </ul>
      
      <h3>Landscapes</h3>
      <p>Landscapes benefit from atmospheric perspective:</p>
      <ul>
        <li>Use more saturated colors in the foreground</li>
        <li>Gradually decrease saturation and contrast as elements recede into the distance</li>
        <li>Consider blue-gray tints for distant elements to create atmospheric perspective</li>
      </ul>
      
      <h3>Abstract and Geometric Designs</h3>
      <p>These designs can handle more dramatic color combinations:</p>
      <ul>
        <li>Experiment with bold complementary colors for maximum impact</li>
        <li>Try unexpected color combinations to create unique effects</li>
        <li>Use color blocking for modern, graphic appeal</li>
      </ul>
      
      <h2>Working with Fabric Colors</h2>
      <p>Your fabric choice affects how thread colors appear:</p>
      <ul>
        <li>White fabric makes colors appear bright and true</li>
        <li>Natural/cream fabric adds warmth to all colors</li>
        <li>Colored fabrics can dramatically alter how thread colors look—test before committing</li>
        <li>Dark fabrics may require more thread strands for light colors to show properly</li>
      </ul>
      
      <h2>Color Psychology in Cross Stitch</h2>
      <p>Different colors evoke different emotions, which can enhance the theme of your cross stitch:</p>
      <ul>
        <li>Reds: Passion, energy, warmth</li>
        <li>Blues: Calm, trust, serenity</li>
        <li>Greens: Growth, harmony, freshness</li>
        <li>Yellows: Happiness, optimism, clarity</li>
        <li>Purples: Luxury, creativity, wisdom</li>
        <li>Oranges: Enthusiasm, creativity, determination</li>
        <li>Neutrals: Sophistication, timelessness, versatility</li>
      </ul>
      
      <h2>Troubleshooting Color Issues</h2>
      
      <h3>Colors Blending Together</h3>
      <p>If your colors aren't distinct enough:</p>
      <ul>
        <li>Increase the contrast between adjacent colors</li>
        <li>Add an outline in a darker color to separate elements</li>
        <li>Consider using fewer colors with greater distinction between them</li>
      </ul>
      
      <h3>Too Much Contrast</h3>
      <p>If your design looks harsh or disjointed:</p>
      <ul>
        <li>Add intermediate values to create smoother transitions</li>
        <li>Reduce the saturation of some colors</li>
        <li>Introduce a unifying color that appears throughout the design</li>
      </ul>
      
      <h3>Colors Don't Match Your Vision</h3>
      <p>If the colors don't look as expected when stitched:</p>
      <ul>
        <li>Check your lighting—natural daylight shows colors most accurately</li>
        <li>Consider how colors interact—adjacent colors influence how we perceive each other</li>
        <li>Remember that colors on a computer screen may not match physical thread colors</li>
      </ul>
      
      <h2>Digital Tools for Color Planning</h2>
      <p>Several tools can help you plan your color schemes:</p>
      <ul>
        <li>DMC's online color chart with RGB values</li>
        <li>Cross stitch pattern software with color planning features</li>
        <li>Color scheme generators like Adobe Color or Coolors.co</li>
        <li>Our own Cross Stitch Pattern Maker tool, which includes color harmony features</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Understanding color theory transforms your cross stitch from simple reproduction to artistic expression. By applying these principles, you can create patterns with greater depth, harmony, and emotional impact. Whether you're designing your own patterns or adapting existing ones, thoughtful color choices will elevate your cross stitch projects to new levels of beauty and sophistication.</p>
      
      <p>Remember that while color theory provides useful guidelines, there are no absolute rules in art. Trust your eye, experiment with different combinations, and most importantly, choose colors that bring you joy as you stitch!</p>
    `,
    relatedPosts: [
      'beginners-guide-to-cross-stitching',
      'how-to-choose-the-right-fabric',
      'creating-custom-patterns-from-family-photos'
    ]
  }
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? BLOG_POSTS[slug as keyof typeof BLOG_POSTS] : null;
  
  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="mt-6">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Cross Stitch Pattern Maker Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={`${post.title} | Cross Stitch Pattern Maker Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Blog Post Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4 hover:bg-white/50">
              <Link href="/blog" className="flex items-center text-gray-600">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
            <div className="flex flex-wrap items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-1" />
                <Link href={`/blog/category/${post.category.toLowerCase()}`} className="text-primary hover:underline">
                  {post.category}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white p-2 rounded-lg shadow-xl">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Blog Post Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Button variant="outline" size="sm" className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share this post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {post.relatedPosts.map(relatedSlug => {
              const relatedPost = BLOG_POSTS[relatedSlug as keyof typeof BLOG_POSTS];
              if (!relatedPost) return null;
              
              return (
                <div key={relatedSlug} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${relatedSlug}`} className="hover:underline">{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedSlug}`} 
                      className="text-primary hover:underline inline-flex items-center text-sm font-medium"
                    >
                      Read more 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Enjoyed this article?</h2>
          <p className="mt-2 text-white/90">
            Subscribe to our newsletter for more cross stitch tips, patterns, and tutorials.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
